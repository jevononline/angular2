import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperiorDocumentFormComponent } from './superior-document-form.component';

const routes: Routes = [
  { path: '0/:id', component: SuperiorDocumentFormComponent, data: { title: '查看上级文件' } },
  { path: '1/:id', component: SuperiorDocumentFormComponent, data: { title: '新建上级文件' } },
  { path: '2/:id', component: SuperiorDocumentFormComponent, data: { title: '编辑上级文件' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperiorDocumentFormRoutingModule { }
