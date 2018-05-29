import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncingComponent } from './announcing.component'

const routes: Routes = [
  { path: '', component: AnnouncingComponent, data: { title: '公告' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncingRoutingModule { }

