import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

import { EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

export class Table {
}

interface Database<T> {
  get(tableQuery: TableQuery): Observable<TableResult<T>>
}

export class TableDataSource<T> extends DataSource<any>{
  isLoading = false;
  total: number;

  renderedData: T[];

  refresh(index = 0) {
    if (this.paginator) {
      this.paginator.pageIndex = index;
    }
    this.rowChange.next();
  }

  private rowChange = new EventEmitter();

  constructor(private database: Database<T>, private paginator?: MatPaginator, private sort?: MatSort) {
    super();
  }

  connect(): Observable<T[]> {
    let changes = [this.rowChange];
    if (this.paginator) {
      changes.push(this.paginator.page);
    }
    if (this.sort) {
      changes.push(this.sort.sortChange);
    }
    return Observable
      .merge(...changes)
      .startWith(null)
      .switchMap(() => {
        this.isLoading = true;
        let tableQuery: TableQuery = {};
        if (this.paginator) {
          tableQuery.page = this.paginator.pageIndex + 1;
          tableQuery.limit = this.paginator.pageSize;
        }
        if (this.sort) {
          tableQuery.sort = this.sort.active,
            tableQuery.orderBy = this.sort.direction
        }
        return this.database.get(tableQuery);
      })
      .map(data => {
        this.isLoading = false;
        this.total = data.total;
        this.renderedData = data.results;
        return data.results;
      })
      .catch(() => {
        this.isLoading = false;
        this.total = 0;
        this.renderedData = [];
        return Observable.of([]);
      });
  }
  disconnect() { }
}