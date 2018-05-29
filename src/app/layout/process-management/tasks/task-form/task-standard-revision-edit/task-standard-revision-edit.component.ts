
import { Component, ViewChild, Input, OnInit } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { StandardRevisionsService } from '../../../standard-revisions/standard-revisions.service';
import { StandardRevisionManagerComponent } from '../../../standard-revisions/standard-revision-manager/standard-revision-manager.component';

@Component({
  selector: 'app-task-standard-revision-edit',
  templateUrl: './task-standard-revision-edit.component.html',
  styleUrls: ['./task-standard-revision-edit.component.scss']
})
export class TaskStandardRevisionEditComponent implements OnInit {

  @Input()
  task: Task;

  @ViewChild('srm')
  srm: StandardRevisionManagerComponent;

  displayOpinions = false;

  submitting = false;

  constructor(
    private tasksService: TasksService,
    private parent: TaskFormComponent,
    private standardRevisionsService: StandardRevisionsService
  ) { }

  ngOnInit() {
    let resultVariable = this.task.variables.find(item => item.name === 'result');
    if (resultVariable) {
      if (resultVariable.value == 0) {
        this.displayOpinions = true;
      }
    }
  }

  goOn() {
    this.submitting = true;
    // console.log(this.srim.form, this.srim.model)
    this.parent.goOn({
      standardRevisions: {
        updatedItems: [
          this.standardRevisionsService.extract(this.srm.model)
        ]
      }
    });
  }

}
