import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeBaseComponent } from './knowledge-base.component'

const routes: Routes = [
  { path: '', component: KnowledgeBaseComponent, data: { title: '知识库' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeBaseRoutingModule { }
