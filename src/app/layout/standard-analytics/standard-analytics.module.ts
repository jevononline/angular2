import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material';

import { StandardAssetAnalysisModule } from './standard-asset-analysis/standard-asset-analysis.module';
import { StandardUsageAnalysisModule } from './standard-usage-analysis/standard-usage-analysis.module';
import { StandardRevisionAnalysisModule } from './standard-revision-analysis/standard-revision-analysis.module';

import { StandardAnalyticsRoutingModule } from './standard-analytics-routing.module';
import { StandardAnalyticsComponent } from './standard-analytics.component';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    StandardAssetAnalysisModule, StandardUsageAnalysisModule, StandardRevisionAnalysisModule,
    StandardAnalyticsRoutingModule,
  ],
  declarations: [StandardAnalyticsComponent]
})
export class StandardAnalyticsModule { }
