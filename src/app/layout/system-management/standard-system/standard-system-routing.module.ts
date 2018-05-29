import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardSystemComponent } from './standard-system.component';

const routes: Routes = [
  { path: '', component: StandardSystemComponent, data: { title: '体系管理' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardSystemRoutingModule { }
