
import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

@Component({
  selector: 'app-task-standard-revision-publish',
  templateUrl: './task-standard-revision-publish.component.html',
  styleUrls: ['./task-standard-revision-publish.component.scss']
})
export class TaskStandardRevisionPublishComponent implements OnInit {

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
