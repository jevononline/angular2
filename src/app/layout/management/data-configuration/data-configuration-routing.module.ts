import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataConfigurationComponent } from './data-configuration.component';

const routes: Routes = [
  { path: '', component: DataConfigurationComponent, data: { title: '系统数据配置' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataConfigurationRoutingModule { }
