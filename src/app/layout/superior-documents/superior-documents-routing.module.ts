import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperiorDocumentsComponent } from './superior-documents.component';

const routes: Routes = [
  { path: '', component: SuperiorDocumentsComponent, data: { title: '上级文件' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperiorDocumentsRoutingModule { }
