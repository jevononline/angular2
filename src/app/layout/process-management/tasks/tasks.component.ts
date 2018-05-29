
import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';


import { APP_CONFIG, AppConfig } from '../../../core/app-config';
import { ConfirmDialogComponent } from '../../../shared/';
import { TasksService } from './tasks.service';
import { Task } from './task';

import { ProcessDiagramComponent } from '../processes/process-diagram/process-diagram.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @ViewChild('keyword')
  keyword: ElementRef;

  selectedTab = 0;

  filter = new Subject<string>();

  constructor() {

  }

  ngOnInit() {

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });
  }

  selectTab(value: number) {
    this.selectedTab = value;

  }

}

