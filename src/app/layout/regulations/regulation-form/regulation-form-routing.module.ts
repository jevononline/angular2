import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegulationFormComponent } from './regulation-form.component';

const routes: Routes = [
  { path: '0/:id', component: RegulationFormComponent, data: { title: '查看法律法规' } },
  { path: '1/:id', component: RegulationFormComponent, data: { title: '新建法律法规' } },
  { path: '2/:id', component: RegulationFormComponent, data: { title: '编辑法律法规' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulationFormRoutingModule { }
