import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidelineFormComponent } from './guideline-form.component';

const routes: Routes = [
  { path: '0/:id', component: GuidelineFormComponent, data: { title: '查看目标和方针' } },
  { path: '1/:id', component: GuidelineFormComponent, data: { title: '新建目标和方针' } },
  { path: '2/:id', component: GuidelineFormComponent, data: { title: '编辑目标和方针' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelineFormRoutingModule { }
