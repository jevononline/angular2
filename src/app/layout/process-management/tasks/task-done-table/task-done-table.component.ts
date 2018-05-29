import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';


import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { ConfirmDialogComponent, TableDataSource } from '../../../../shared/';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

import { ProcessDiagramComponent } from '../../processes/process-diagram/process-diagram.component';


@Component({
  selector: 'app-task-done-table',
  templateUrl: './task-done-table.component.html',
  styleUrls: ['./task-done-table.component.scss']
})
export class TaskDoneTableComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @Input()
  filter: Subject<string>;

  keyword: string;

  dataSource: TableDataSource<Task>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    private tasksService: TasksService
  ) {

  }

  ngOnInit() {
    this.displayedColumns = ['id', 'activityName', 'businessInstance', 'endTime'];
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.tasksService.get(1, { ...tableQuery, keyword: this.keyword });
      }
    }, this.paginator, this.sort);

    if (this.filter) {
      this.filter.subscribe((value) => {
        this.keyword = value;
        this.dataSource.refresh();
      });
    }
  }

  gotoTask(item: Task) {
    this.router.navigate(['/process-management/tasks/form', {
      processInstanceId: item.processInstanceId,
      processBusinessInstanceId: item.businessInstance.id,
      taskId: item.id
    }])
  }

  openProcessDiagramDialog(item: Task) {
    this.dialog.open(ProcessDiagramComponent, { data: item.processInstanceId });
  }

}

