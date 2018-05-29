import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { StandardRevisionsService } from '../../../standard-revisions/standard-revisions.service';
import { StandardRevisionManagerComponent } from '../../../standard-revisions/standard-revision-manager/standard-revision-manager.component';

import { AuthService } from '../../../../../core/auth/auth.service';
import { StandardRevisionSolicitedOpinionManagerComponent } from '../../../standard-revisions/standard-revision-solicited-opinions/standard-revision-solicited-opinion-manager/standard-revision-solicited-opinion-manager.component';

@Component({
  selector: 'app-task-standard-revision-and-solicited-opinion-review',
  templateUrl: './task-standard-revision-and-solicited-opinion-review.component.html',
  styleUrls: ['./task-standard-revision-and-solicited-opinion-review.component.scss']
})
export class TaskStandardRevisionAndSolicitedOpinionReviewComponent implements OnInit {


  @ViewChild('srsom')
  srsom: StandardRevisionSolicitedOpinionManagerComponent;

  @ViewChild('srm')
  srm: StandardRevisionManagerComponent;

  @Input()
  task: Task;

  model: any = {};

  submitting: boolean;

  isReady = false;

  constructor(
    private authService: AuthService,
    private tasksService: TasksService,
    private standardRevisionsService: StandardRevisionsService,
    private parent: TaskFormComponent
  ) {

  }

  ngOnInit() {

  }

  goOn() {
    this.submitting = true;

    this.parent.goOn({
      standardRevisions: {
        updatedItems: [
          this.standardRevisionsService.extract(this.srm.model)
        ]
      },
      standardRevisionSolicitedOpinions: {
        updatedItems: this.srsom.database.updatedItems,
      }
    });

  }

}
