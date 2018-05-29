import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent, data: { title: '用户管理' } },
  { path: ':form', loadChildren: './user-form/user-form.module#UserFormModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
