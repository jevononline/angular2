import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  list: Task[] = [];
  constructor(private router: Router, private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.get(0, { page: 1, limit: 5 }).subscribe(data => {
      this.list = data.results;
    });
  }

  gotoTask(item: Task) {
    this.router.navigate(['/process-management/tasks/form', {
      processInstanceId: item.processInstanceId,
      processBusinessInstanceId: item.businessInstance.id,
      taskId: item.id
    }])
  }

}
