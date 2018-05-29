import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessesComponent } from './processes.component';

const routes: Routes = [
  { path: '', component: ProcessesComponent, data: { title: '计划管理' } },
  { path: 'detail', loadChildren: './process-detail/process-detail.module#ProcessDetailModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessesRoutingModule { }
