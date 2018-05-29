import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent, data: { title: '我的任务' } },
  { path: 'form', loadChildren: './task-form/task-form.module#TaskFormModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
