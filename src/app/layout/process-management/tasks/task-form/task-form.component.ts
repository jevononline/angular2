import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  task = new Task();
  processDefinitionKey: string;
  constructor(private router: Router, private route: ActivatedRoute, private tasksService: TasksService) {

    this.task = this.route.snapshot.data.task;
    // standardRevisionPlanProcess standardRevisionProcess
    this.processDefinitionKey = this.task.processDefinitionId.split(':')[0];
  }

  ngOnInit() {
    // this.route.data.subscribe((data: { task: Task }) => {
    //   this.task = data.task;
    // });
  }

  goBack(data?: any) {
    this.goOn(data);
  }

  goOn(data?: any) {
    this.task.data = data;

    return this.tasksService.saveTask(this.task).subscribe(() => {
      this.router.navigate(['/process-management/tasks']);
    });
  }

}
