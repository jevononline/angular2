import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';


import { APP_CONFIG, AppConfig } from '../../core/app-config';
import { AuthService } from '../../core/auth/auth.service';
import { ConfirmDialogComponent, ImportDialogComponent, TableDataSource } from '../../shared/';
import { SuperiorDocumentsService } from './superior-documents.service';
import { SuperiorDocument } from './superior-document';


@Component({
  selector: 'app-superior-documents',
  templateUrl: './superior-documents.component.html',
  styleUrls: ['./superior-documents.component.scss']
})
export class SuperiorDocumentsComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<SuperiorDocument>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private superiorDocumentsService: SuperiorDocumentsService
  ) {

  }

  ngOnInit() {
    this.displayedColumns = ['id', 'timeSpan', 'documentNo', 'documentName', 'issuer', 'executeDate', 'actions'];
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.superiorDocumentsService.get({ ...tableQuery, keyword: this.keyword.nativeElement.value });
      }
    }, this.paginator, this.sort);

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '上级文件模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+S4iue6p+aWh+S7tuaooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.superiorDocumentsService.import(result).subscribe(() => {
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
      data: { id: 'delete', content: item.documentName }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.superiorDocumentsService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.documentName}”已删除！`, null, {
            duration: 2000
          });
        });
      }
    });
  }
}

