import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfComponent } from './self.component';

const routes: Routes = [
  { path: '', component: SelfComponent, data: { title: '自评' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfRoutingModule { }
