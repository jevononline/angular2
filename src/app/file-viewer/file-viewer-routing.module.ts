import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileViewerComponent } from './file-viewer.component';

const routes: Routes = [
  { path: ':ticket', component: FileViewerComponent, data: { title: '在线查看' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileViewerRoutingModule { }
