import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { AuthService } from '../../../../core/auth/auth.service';
import { ConfirmDialogComponent, ImportDialogComponent, TableDataSource } from '../../../../shared/';

import { Department } from '../../org/departments/department';
import { StandardSystem } from '../../../system-management/standard-system/standard-system';
import { Standard } from '../../../standard-management/standards/standard';
import { PostSelectComponent } from '../../org/posts/post-select/post-select.component';
import { StandardSelectComponent } from '../../../standard-management/standards/standard-select/standard-select.component';
import { Post } from '../../org/posts/post';
import { PostStandardAssociationsService } from './post-standard-associations.service';


@Component({
  selector: 'app-post-standard-associations',
  templateUrl: './post-standard-associations.component.html',
  styleUrls: ['./post-standard-associations.component.scss']
})
export class PostStandardAssociationsComponent implements OnInit {

  @Input()
  mode: 'management' | 'view' = 'management';

  @Input()
  view: number = 1; //1 岗位查询标准 2 标准查询岗位

  departments: Department[] = [];
  posts: Post[] = [];

  standardSystems: StandardSystem[] = [];
  standards: Standard[] = [];

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  @ViewChild('postSelect')
  postSelect: PostSelectComponent;

  @ViewChild('standardSelect')
  standardSelect: StandardSelectComponent;

  dataSource: TableDataSource<any>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private postStandardAssociationsService: PostStandardAssociationsService
  ) {

  }

  ngOnInit() {
    if (this.view === 1) {
      this.displayedColumns = ['id', 'postName', 'departmentName', 'standardNo', 'standardName', 'createdAt'];
    } else {
      this.displayedColumns = ['id', 'standardNo', 'standardName', 'postName', 'departmentName', 'createdAt'];
    }
    if (this.mode === 'management') {
      this.displayedColumns.push(...['createdBy', 'actions']);
    }

    this.dataSource = new TableDataSource({
      get: (tableQurey) => {

        let postIds = this.posts.map(item => item.id);
        let standardIds = this.standards.map(item => item.id);
        if (this.departments.length > 0) {
          // 选了部门 没有选中任何岗位
          if (postIds.length === 0) {
            postIds = [0];
          }
        }
        if (this.standardSystems.length > 0) {
          if (this.standards.length === 0) {
            standardIds = [0];
          }
        }
        return this.postStandardAssociationsService.get({
          ...tableQurey,
          keyword: this.keyword.nativeElement.value,
          posts: postIds,
          standards: standardIds
        });
      }
    }, this.paginator, this.sort);

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });
  }


  onDepartmentSelectClose(event) {
    if (event.changed) {

      setTimeout(() => {
        this.postSelect.selectAll();
        this.dataSource.refresh();
      });
    }
  }

  onPostSelectClose(event) {
    if (event.changed) {
      this.dataSource.refresh();
    }
  }

  onStandardSystemSelectClose(event) {
    if (event.changed) {

      setTimeout(() => {
        this.standardSelect.selectAll();
        this.dataSource.refresh();
      });
    }
  }

  onStandardSelectClose(event) {
    if (event.changed) {
      this.dataSource.refresh();
    }
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '岗位标准关联模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+Wyl+S9jeagh+WHhuWFs+iBlOaooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postStandardAssociationsService.import(result).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open('导入成功', null, { duration: 3000 });
        }, (errorResponse: HttpErrorResponse) => {
          let message = '导入失败';
          let { status } = errorResponse;
          if (status === 400) {
            let { code, errorData } = errorResponse.error;
            if (code === 1000) {
              message = `导入失败，岗位[${errorData}]不存在`;
            } else if (code === 1001) {
              message = `导入失败，标准[${errorData}]不存在`;
            } else {
            }
          }
          this.snackBar.open(message, null, { duration: 3000, extraClasses: ['warn'] });
        });
      }
    });
  }

  openRemoveDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'remove-post-standard-association', content: item }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postStandardAssociationsService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.postName}”与“${item.standardNo}”的关联已移除！`, null, {
            duration: 2000
          });
        });
      }
    });
  }
}

