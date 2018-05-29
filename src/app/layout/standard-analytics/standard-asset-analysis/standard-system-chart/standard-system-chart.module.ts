import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../../../shared/';
import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';

import { StandardSystemChartComponent } from './standard-system-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [StandardSystemChartComponent],
  exports: [StandardSystemChartComponent],
  providers: [StandardAssetAnalyticsService]
})
export class StandardSystemChartModule { }
