import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostManagementComponent } from './cost-management.component';

const routes: Routes = [
  { path: '', component: CostManagementComponent, data: { title: '费用管理' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostManagementRoutingModule { }
