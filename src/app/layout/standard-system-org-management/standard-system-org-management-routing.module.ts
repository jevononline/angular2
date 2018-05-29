

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardSystemOrgManagementComponent } from './standard-system-org-management.component';


const routes: Routes = [
  {
    path: '', component: StandardSystemOrgManagementComponent, data: { title: '标准组织管理' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardSystemOrgManagementRoutingModule { }
