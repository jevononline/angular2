import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormComponent } from './task-form.component';
import { TaskFormResolve } from './task-form-resolver';

const routes: Routes = [
  {
    path: '',
    component: TaskFormComponent,
    resolve: {
      task: TaskFormResolve
    },
    data: { title: '处理任务' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskFormRoutingModule { }
