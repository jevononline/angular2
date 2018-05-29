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

import { RegulationsService } from './regulations.service';
import { Regulation } from './regulation';
import { RegulationCategory } from './regulation-categories/regulation-category';


@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss']
})
export class RegulationsComponent implements OnInit {

  displayedColumns = [];

  categories: RegulationCategory[] = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<Regulation>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private regulationsService: RegulationsService
  ) {

  }

  ngOnInit() {
    this.displayedColumns = ['id', 'category', 'documentNo', 'documentName', 'issuer', 'executeDate', 'actions'];
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.regulationsService.get({
          ...tableQuery,
          keyword: this.keyword.nativeElement.value,
          categories: this.categories.map(item => item.id)
        });
      }
    }, this.paginator, this.sort);

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {

        this.dataSource.refresh();
      });
  }


  onCategorySelectClose(event) {
    if (event.changed) {
      this.categories = event.value || [];
      this.dataSource.refresh();
    }
  }

  download(file) {
    window.open(`/api/download?paths=${file}`);
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '法律法规模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+azleW+i+azleinhOaooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.regulationsService.import(result).subscribe(() => {
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
        this.regulationsService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.documentName}”已删除！`, null, {
            duration: 2000
          });
        });
      }
    });
  }

}

