
import { findInex, values } from 'lodash';

import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { AuthService } from '../../../../../core/auth/auth.service';
import { StandardRevisionPlanOpinionManagerComponent } from '../../../standard-revision-plans/standard-revision-plan-opinions/standard-revision-plan-opinion-manager/standard-revision-plan-opinion-manager.component';

@Component({
  selector: 'app-task-standard-revision-plan-review',
  templateUrl: './task-standard-revision-plan-review.component.html',
  styleUrls: ['./task-standard-revision-plan-review.component.scss']
})
export class TaskStandardRevisionPlanReviewComponent implements OnInit {

  @ViewChild('opinionManager')
  opinionManager: StandardRevisionPlanOpinionManagerComponent;

  @Input()
  task: Task;

  @Input()
  isOpinionReviewed = false;

  submitting: boolean;

  constructor(
    private authService: AuthService,
    private tasksService: TasksService,
    private parent: TaskFormComponent
  ) {

  }

  ngOnInit() {

  }

  goBack() {
    this.goOn(0);
  }

  goOn(result = 1) {
    this.submitting = true;
    this.parent.goOn({
      result: result,
      userId: this.authService.currentUser.id,
      opinions: {
        createdItems: this.opinionManager.database.createdItems
      }
    });
  }

}