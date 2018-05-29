import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyComponent } from './study.component';

const routes: Routes = [
  { path: '', component: StudyComponent, data: { title: '共同学习' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule { }
