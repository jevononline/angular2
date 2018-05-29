import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementFormComponent } from './announcement-form.component';


const routes: Routes = [
  { path: '1/:id', component: AnnouncementFormComponent, data: { title: '新建公告' } },
  { path: '2/:id', component: AnnouncementFormComponent, data: { title: '编辑公告' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementFormRoutingModule { }
