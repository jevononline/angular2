import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'processes', loadChildren: './processes/processes.module#ProcessesModule' },
      { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessManagementRoutingModule { }
