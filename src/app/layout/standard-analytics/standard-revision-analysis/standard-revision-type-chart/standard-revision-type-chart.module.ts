import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../../../shared/';

import { StandardRevisionAnalyticsService } from '../standard-revision-analytics.service';

import { StandardRevisionTypeChartComponent } from './standard-revision-type-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [StandardRevisionTypeChartComponent],
  exports: [StandardRevisionTypeChartComponent],
  providers: [StandardRevisionAnalyticsService]
})
export class StandardRevisionTypeChartModule { }
