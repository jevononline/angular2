import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'self', loadChildren: './self/self.module#SelfModule' },
  { path: 'audits', loadChildren: './audits/audits.module#AuditsModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationsRoutingModule { }
