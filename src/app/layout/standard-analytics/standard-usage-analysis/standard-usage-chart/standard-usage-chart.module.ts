import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../../../shared/';
import { StandardUsageAnalyticsService } from '../standard-usage-analytics.service';

import { StandardUsageChartComponent } from './standard-usage-chart.component';


@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [StandardUsageChartComponent],
  exports: [StandardUsageChartComponent],
  providers: [StandardUsageAnalyticsService]
})
export class StandardUsageChartModule { }
