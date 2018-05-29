import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject, Optional } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { AuthService } from '../../../../core/auth/auth.service';
import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { ConfirmDialogComponent, ImportDialogComponent, TableDataSource } from '../../../../shared/';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { OrgService } from '../org.service';
import { Department } from '../departments/department';
import { Post } from '../posts/post';
import { StaffService } from './staff.service';
import { Staff } from './staff';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  displayedColumns = [];

  departments: Department[] = [];
  posts: Post[] = [];
  postSelectChanged = false;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<Staff>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    @Optional() private treeviewService: TreeviewService,
    public orgService: OrgService,
    private staffService: StaffService) {

  }

  ngOnInit() {
    this.departments = [this.orgService.department];

    this.displayedColumns = ['id', 'staffNo', 'fullName', 'status', 'posts', 'loginId', 'userStatus', 'email', 'mobile', 'createdAt', 'actions'];

    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.staffService.getOfDepartment(this.orgService.department.id,
          {
            ...tableQuery,
            keyword: this.keyword.nativeElement.value,
            posts: this.posts.map(item => item.id)
          });
      }
    }, this.paginator, this.sort);

    this.orgService.departmentChange.subscribe(() => {
      this.departments = [this.orgService.department];
      this.posts = [];
      this.dataSource.refresh();
    });

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });

  }

  displayPosts(posts: Post[]) {
    let results = [];
    posts.forEach(post => {
      results.push(post.name);
    });
    return results.join(',');
  }

  onPostSelectClose(event) {
    if (event.changed) {
      this.posts = event.value || [];
      this.dataSource.refresh();
    }
  }

  openFormDialog({ action, id }) {
    let dialogRef = this.dialog.open(StaffFormComponent, { disableClose: true, data: { action, id } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.refresh();
        if (this.treeviewService) {
          this.treeviewService.refresh();
        }
      }
    });
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '人员模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+S6uuWRmOaooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.staffService.import(result).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open('导入成功', null, { duration: 3000 });
          if (this.treeviewService) {
            this.treeviewService.refresh();
          }
        }, () => {
          this.snackBar.open('导入失败', null, { duration: 3000, extraClasses: ['warn'] });
        });
      }
    });
  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.fullName }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.staffService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          if (this.treeviewService) {
            this.treeviewService.refresh();
          }
          this.snackBar.open(`“${item.fullName}”已删除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          let { status } = errorResponse;
          if (status === 423) {
            let { code, errorData } = errorResponse.error;
            let message = '';
            if (code === 906) {
              message = `删除失败，${item.fullName}是${errorData.map(item => item.name).toString()}的分管领导！`;
            } else if (code === 907) {
              message = `删除失败，${item.fullName}关联着用户${errorData.loginId}！`;
            }
            this.snackBar.open(message, null, {
              duration: 3000,
              extraClasses: ['warn']
            });
          }
        });
      }
    }, (error) => {
      debugger;
    });
  }

}
