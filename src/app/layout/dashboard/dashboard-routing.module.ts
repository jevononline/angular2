import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { DashboardResolve } from './dashboard-resolve';

const routes: Routes = [
  {
    path: '',
    resolve: {
      standardSystems: DashboardResolve
    },
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DashboardResolve]
})
export class DashboardRoutingModule { }
