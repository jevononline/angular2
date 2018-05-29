

import { Injectable } from '@angular/core';


import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TasksService } from '../tasks.service';

@Injectable()
export class TaskFormResolve implements Resolve<any>{

  constructor(private tasksService: TasksService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let { processInstanceId, taskId } = route.params;
    return this.tasksService.getOneById(processInstanceId, taskId);
  }
}
