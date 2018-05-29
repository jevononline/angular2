
import { findInex, values } from 'lodash';

import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

@Component({
  selector: 'app-task-standard-revision-plan-publish',
  templateUrl: './task-standard-revision-plan-publish.component.html',
  styleUrls: ['./task-standard-revision-plan-publish.component.scss']
})
export class TaskStandardRevisionPlanPublishComponent implements OnInit {

  @Input()
  task: Task;

  submitting: boolean;


  constructor(
    private tasksService: TasksService,
    private parent: TaskFormComponent
  ) {

  }

  ngOnInit() {

  }

  goOn() {
    this.submitting = true;
    this.parent.goOn({ result: 1 });
  }

}