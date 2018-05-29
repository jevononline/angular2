import { Component, OnInit, Optional, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';


import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ConfirmDialogComponent, ImportDialogComponent, TableDataSource } from '../../../../shared/';
import { PostFormComponent } from './post-form/post-form.component';
import { OrgService } from '../org.service';
import { DepartmentsService } from '../departments/departments.service';
import { Department } from '../departments/department';
import { PostsService } from './posts.service';
import { Post } from './post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<Post>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    @Optional() private treeviewService: TreeviewService,
    public authService: AuthService,
    public orgService: OrgService,
    private departmentsService: DepartmentsService,
    private postsService: PostsService
  ) {

  }

  ngOnInit() {

    this.displayedColumns = ['id', 'name', 'status', 'staffCount', 'createdAt', 'actions'];

    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.postsService.get(this.orgService.department.id,
          { ...tableQuery, keyword: this.keyword.nativeElement.value });
      }
    }, this.paginator, this.sort);

    this.orgService.departmentChange.subscribe(() => {
      this.dataSource.refresh();
    });

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });


  }

  openFormDialog({ action, id }) {
    let dialogRef = this.dialog.open(PostFormComponent, { disableClose: true, data: { action, id } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.refresh();
      }
    });
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '岗位模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+Wyl+S9jeaooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postsService.import(result).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open('导入成功', null, { duration: 3000 });
        }, () => {
          this.snackBar.open('导入失败', null, { duration: 3000, extraClasses: ['warn'] });
        });
      }
    });
  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.name }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postsService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.name}”已删除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          if (errorResponse.status === 423) {
            this.snackBar.open(`删除“${item.name}”失败，不能删除有员工的岗位！`, null, {
              duration: 3000,
              extraClasses: ['warn']
            });
          }
        });
      }
    });
  }

}
