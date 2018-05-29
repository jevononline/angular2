import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form.component';

const routes: Routes = [
  { path: '1/:id', component: UserFormComponent, data: { title: '新建用户' } },
  { path: '2/:id', component: UserFormComponent, data: { title: '编辑用户' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormRoutingModule { }
