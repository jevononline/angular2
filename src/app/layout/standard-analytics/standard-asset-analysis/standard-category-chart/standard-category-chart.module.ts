import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../../../shared/';
import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';

import { StandardCategoryChartComponent } from './standard-category-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [StandardCategoryChartComponent],
  exports: [StandardCategoryChartComponent],
  providers: [StandardAssetAnalyticsService]
})
export class StandardCategoryChartModule { }
