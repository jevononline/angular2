

import { findInex, values } from 'lodash';
import * as moment from 'moment';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../../../core/auth/auth.service';

import { ProcessesService } from '../../../processes/processes.service';
import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { StandardRevisionPlanManagerComponent } from '../../../standard-revision-plans/standard-revision-plan-manager/standard-revision-plan-manager.component';
import { StandardRevisionsService } from '../../../standard-revisions/standard-revisions.service';
import { StandardRevisionPlanOpinionManagerComponent } from '../../../standard-revision-plans/standard-revision-plan-opinions/standard-revision-plan-opinion-manager/standard-revision-plan-opinion-manager.component';

@Component({
  selector: 'app-task-standard-revision-plan-and-opinion-review',
  templateUrl: './task-standard-revision-plan-and-opinion-review.component.html',
  styleUrls: ['./task-standard-revision-plan-and-opinion-review.component.scss']
})
export class TaskStandardRevisionPlanAndOpinionReviewComponent implements OnInit {

  @ViewChild('opinionManager')
  opinionManager: StandardRevisionPlanOpinionManagerComponent;

  @ViewChild('standardRevisionPlanManager')
  standardRevisionPlanManager: StandardRevisionPlanManagerComponent;

  @Input()
  task: Task;

  model: any = {};

  submitting: boolean;

  isReady = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private processesService: ProcessesService,
    private tasksService: TasksService,
    private standardRevisionsService: StandardRevisionsService,
    private parent: TaskFormComponent
  ) {

  }

  ngOnInit() {
    this.processesService.getOneById(this.route.snapshot.params.processBusinessInstanceId).subscribe(data => {
      this.isReady = true;
      if (data.data) {
        this.model = data.data;
      }
    });
  }

  goOn() {
    this.submitting = true;

    this.parent.goOn({
      // departmentReviewTime: moment(this.model.departmentReviewTime).format('YYYY-MM-DD'),
      expertCommitteeReviewTime: moment(this.model.expertCommitteeReviewTime).format('YYYY-MM-DD'),
      standardCommitteeReviewTime: moment(this.model.standardCommitteeReviewTime).format('YYYY-MM-DD'),

      userId: this.authService.currentUser.id,

      opinions: {
        updatedItems: this.opinionManager.database.updatedItems
      },
      standardRevisions: {
        createdItems: this.standardRevisionPlanManager.database.createdItems.map(item => this.standardRevisionsService.extract(item)),
        updatedItems: this.standardRevisionPlanManager.database.updatedItems.map(item => this.standardRevisionsService.extract(item)),
        deletedItems: this.standardRevisionPlanManager.database.deletedItmes.map(item => this.standardRevisionsService.extract(item))
      }
    });
  }

}