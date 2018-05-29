import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';

const routes: Routes = [
  { path: '', component: RolesComponent, data: { title: '角色管理' } },
  { path: ':form', loadChildren: './role-form/role-form.module#RoleFormModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
