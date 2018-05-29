import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleFormComponent } from './role-form.component';


const routes: Routes = [
  { path: '1/:id', component: RoleFormComponent, data: { title: '新建角色' } },
  { path: '2/:id', component: RoleFormComponent, data: { title: '编辑角色' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleFormRoutingModule { }
