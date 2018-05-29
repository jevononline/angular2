
import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { AuthService } from '../../../../../core/auth/auth.service';
import { StandardRevisionSolicitedOpinionManagerComponent } from '../../../standard-revisions/standard-revision-solicited-opinions/standard-revision-solicited-opinion-manager/standard-revision-solicited-opinion-manager.component';

@Component({
  selector: 'app-task-standard-revision-soliciting',
  templateUrl: './task-standard-revision-soliciting.component.html',
  styleUrls: ['./task-standard-revision-soliciting.component.scss']
})
export class TaskStandardRevisionSolicitingComponent implements OnInit {

  @Input()
  task: Task;

  @ViewChild('srsom')
  srsom: StandardRevisionSolicitedOpinionManagerComponent;

  submitting: boolean;

  constructor(
    private authService: AuthService,
    private tasksService: TasksService,
    private parent: TaskFormComponent
  ) { }

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
      standardRevisionSolicitedOpinions: {
        createdItems: this.srsom.database.createdItems
      }
    });
  }

}
