
import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { User } from '../../../../management/permission/users/user';
import { DepartmentSelectComponent } from '../../../../management/org/departments/department-select/department-select.component';


@Component({
  selector: 'app-task-standard-revision-plan-set-editor',
  templateUrl: './task-standard-revision-plan-set-editor.component.html',
  styleUrls: ['./task-standard-revision-plan-set-editor.component.scss']
})
export class TaskStandardRevisionPlanSetEditorComponent implements OnInit {

  @ViewChild(DepartmentSelectComponent)
  departmentSelect: DepartmentSelectComponent;

  @Input()
  task: Task;
  submitting: boolean;
  data: User;

  department: any;

  constructor(private parent: TaskFormComponent) { }

  ngOnInit() {
    this.department = { id: JSON.parse(this.task.variables.filter(item => item.name === 'departments')[0].value)[this.task.assignee].departmentId };
  }

  goOn() {
    this.submitting = true;
    let data = this.data.id;
    this.parent.goOn({
      userId: data,
      user : this.data,
      department : {
        id : this.department.id,
        name : this.departmentSelect.displayText
      }
    });
  }

  isDisabledOption(item) {
    return !item.isEnabled || !item.staff.status;
  }

}
