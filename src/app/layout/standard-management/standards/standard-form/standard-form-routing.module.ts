import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardFormComponent } from './standard-form.component';


const routes: Routes = [
  { path: '0/:id', component: StandardFormComponent, data: { title: '查看标准' } },
  { path: '1/:id', component: StandardFormComponent, data: { title: '新建标准' } },
  { path: '2/:id', component: StandardFormComponent, data: { title: '编辑标准' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardFormRoutingModule { }
