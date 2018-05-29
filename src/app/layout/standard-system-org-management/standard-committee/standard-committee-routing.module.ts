import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardCommitteeComponent } from './standard-committee.component';

const routes: Routes = [
  { path: '', component: StandardCommitteeComponent, data: { title: '标委会组织管理' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardCommitteeRoutingModule { }
