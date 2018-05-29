import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidelinesComponent } from './guidelines.component';

const routes: Routes = [
  { path: '', component: GuidelinesComponent, data: { title: '方针目标' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule { }
