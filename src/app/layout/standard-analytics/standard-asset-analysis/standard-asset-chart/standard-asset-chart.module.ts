import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';
import { ChartModule } from '../../../../shared/';

import { StandardAssetChartComponent } from './standard-asset-chart.component';


@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [StandardAssetChartComponent],
  exports: [StandardAssetChartComponent],
  providers: [StandardAssetAnalyticsService]
})
export class StandardAssetChartModule { }
