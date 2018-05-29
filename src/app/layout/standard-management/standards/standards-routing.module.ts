import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardsComponent } from './standards.component';

const routes: Routes = [
  {
    path: '', component: StandardsComponent, data: { title: '标准管理' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardsRoutingModule { }
