import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardNetworkComponent } from './standard-network.component';

const routes: Routes = [
  { path: '', component: StandardNetworkComponent, data: { title: '网络组织管理' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardNetworkRoutingModule { }
