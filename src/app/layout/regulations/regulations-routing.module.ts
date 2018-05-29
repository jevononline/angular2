import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegulationsComponent } from './regulations.component'

const routes: Routes = [
  { path: '', component: RegulationsComponent, data: { title: '法律法规' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulationsRoutingModule { }
