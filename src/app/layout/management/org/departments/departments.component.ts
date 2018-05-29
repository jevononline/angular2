import { Component, OnInit, Optional, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { TableDataSource } from '../../../../shared/';
import { OrgService } from '../org.service';

import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { DepartmentsService } from './departments.service';
import { Department } from './department';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<Department>;

  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    private orgService: OrgService,
    private departmentsService: DepartmentsService
  ) {

  }

  ngOnInit() {

    this.displayedColumns = ['id', 'name', 'abbr', 'leader', 'postCount', 'staffCount', 'createdAt'];


    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.departmentsService.get(
          this.orgService.department.id,
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

}

