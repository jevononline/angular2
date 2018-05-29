
import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { Department } from '../../../../management/org/departments/department';

@Component({
  selector: 'app-task-standard-revision-plan-set-receiving-departments',
  templateUrl: './task-standard-revision-plan-set-receiving-departments.component.html',
  styleUrls: ['./task-standard-revision-plan-set-receiving-departments.component.scss']
})
export class TaskStandardRevisionPlanSetReceivingDepartmentsComponent implements OnInit {

  @Input()
  task: Task;
  submitting: boolean;
  data: Department[];

  constructor(private parent: TaskFormComponent) {

  }

  ngOnInit() {
  }

  goOn() {
    this.submitting = true;
    let data = this.data.map(item => item.id);
    this.parent.goOn({
     departmentIds: data,
     departments : this.data
    });
  }
}
