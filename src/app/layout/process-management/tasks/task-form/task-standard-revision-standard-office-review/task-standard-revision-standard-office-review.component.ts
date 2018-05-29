
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { StandardRevisionsService } from '../../../standard-revisions/standard-revisions.service';
import { StandardRevisionManagerComponent } from '../../../standard-revisions/standard-revision-manager/standard-revision-manager.component';

import { AuthService } from '../../../../../core/auth/auth.service';
import { StandardRevisionOpinion } from '../../../standard-revisions/standard-revision-opinions/standard-revision-opinion';

@Component({
  selector: 'app-task-standard-revision-standard-office-review',
  templateUrl: './task-standard-revision-standard-office-review.component.html',
  styleUrls: ['./task-standard-revision-standard-office-review.component.scss']
})
export class TaskStandardRevisionStandardOfficeReviewComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  afterSolicited = false;

  @ViewChild('form')
  form: NgForm;

  @ViewChild('srm')
  srm: StandardRevisionManagerComponent;

  model = new StandardRevisionOpinion();

  submitting: boolean;

  constructor(
    private authService: AuthService,
    private tasksService: TasksService,
    private parent: TaskFormComponent,
    private standardRevisionsService: StandardRevisionsService
  ) { }

  ngOnInit() {
    this.model.createdBy = this.authService.getCurrentUser();
  }

  goBack() {
    this.goOn(0);
  }

  goOn(result = 1) {

    this.parent.goOn({
      result: result,
      userId: this.authService.currentUser.id,
      standardRevisionOpinions: this.form.valid ? {
        createdItems: [{
          createdBy: this.model.createdBy,
          createdAt: new Date(),
          content: this.model.content
        }]
      } : undefined,
      standardRevisions: {
        updatedItems: [
          this.standardRevisionsService.extract(this.srm.model)
        ]
      }
    });
  }

}
