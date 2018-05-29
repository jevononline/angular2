import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineEditingComponent } from './online-editing.component';

const routes: Routes = [
  { path: '', component: OnlineEditingComponent, data: { title: '在线编辑' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineEditingRoutingModule { }
