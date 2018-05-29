import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { AuthService } from '../../../../core/auth/auth.service';
import { ConfirmDialogComponent, TableDataSource } from '../../../../shared/';

import { LinkFormComponent } from './link-form/link-form.component';
import { LinksService } from './links.service';
import { Link } from './link';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<Link>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private linksService: LinksService
  ) {

  }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'url', 'createdAt', 'actions'];
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.linksService.get({ ...tableQuery, keyword: this.keyword.nativeElement.value });
      }
    }, this.paginator, this.sort);

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });
  }

  openFormDialog({ action, node }) {
    let dialogRef = this.dialog.open(LinkFormComponent, {
      disableClose: true,
      data: { action, node },
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.refresh();
      }
    });
  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.name }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.linksService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.name}”已删除！`, null, {
            duration: 2000
          });
        });
      }
    });
  }
}

