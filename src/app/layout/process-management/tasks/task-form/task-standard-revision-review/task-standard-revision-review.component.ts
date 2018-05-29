

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { AuthService } from '../../../../../core/auth/auth.service';
import { StandardRevisionOpinion } from '../../../standard-revisions/standard-revision-opinions/standard-revision-opinion';

@Component({
  selector: 'app-task-standard-revision-review',
  templateUrl: './task-standard-revision-review.component.html',
  styleUrls: ['./task-standard-revision-review.component.scss']
})
export class TaskStandardRevisionReviewComponent implements OnInit {

  @Input()
  task: Task;

  @ViewChild('form')
  form: NgForm;

  @Input()
  afterSolicited = false;

  model = new StandardRevisionOpinion();

  submitting: boolean;

  constructor(
    private authService: AuthService,
    private tasksService: TasksService,
    private parent: TaskFormComponent
  ) { }

  ngOnInit() {
    this.model.createdBy = this.authService.getCurrentUser();
  }

  goBack() {
    this.goOn(0);
  }

  goOn(result = 1) {

    this.parent.goOn({
      result,
      userId: this.authService.currentUser.id,
      standardRevisionOpinions: {
        createdItems: this.form.valid ? [{
          createdBy: this.model.createdBy,
          createdAt: new Date(),
          content: this.model.content
        }] : []
      }
    });
  }

}
