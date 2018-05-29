import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../../../shared/';
import { StandardUsageAnalyticsService } from '../standard-usage-analytics.service';

import { StandardUsageRankChartComponent } from './standard-usage-rank-chart.component';


@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [StandardUsageRankChartComponent],
  exports: [StandardUsageRankChartComponent],
  providers: [StandardUsageAnalyticsService]
})
export class StandardUsageRankChartModule { }
