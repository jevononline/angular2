import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { TableDataSource } from '../../../../shared/';

import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { StandardSystemService } from '../standard-system.service';
import { StandardSystem } from '../standard-system';


@Component({
  selector: 'app-standard-system-table',
  templateUrl: './standard-system-table.component.html',
  styleUrls: ['./standard-system-table.component.scss']
})
export class StandardSystemTableComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @Input()
  filter: Subject<string>;
  keyword: string;

  dataSource: TableDataSource<StandardSystem>;

  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    private standardSystemService: StandardSystemService
  ) {

  }

  ngOnInit() {

    this.displayedColumns = ['structureNo', 'name', 'createdAt'];
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.standardSystemService.get(
          this.standardSystemService.standardSystem.id,
          { ...tableQuery, keyword: this.keyword });
      }
    }, this.paginator, this.sort);

    this.standardSystemService.standardSystemChange.subscribe(data => {
      this.dataSource.refresh();
    });

    this.filter.subscribe((value) => {
      this.keyword = value;
      this.dataSource.refresh();
    });
  }
}
