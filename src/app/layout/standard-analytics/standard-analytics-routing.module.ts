import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandardAnalyticsComponent } from './standard-analytics.component';

const routes: Routes = [
  {
    path: '', component: StandardAnalyticsComponent, data: { title: '标准化指数' },
    children: [
      { path: 'standard-asset-analysis', loadChildren: './standard-asset-analysis/standard-asset-analysis.module#StandardAssetAnalysisModule' },
      { path: 'standard-usage-analysis', loadChildren: './standard-usage-analysis/standard-usage-analysis.module#StandardUsageAnalysisModule' },
      { path: 'standard-revision-analysis', loadChildren: './standard-revision-analysis/standard-revision-analysis.module#StandardRevisionAnalysisModule' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardAnalyticsRoutingModule { }
