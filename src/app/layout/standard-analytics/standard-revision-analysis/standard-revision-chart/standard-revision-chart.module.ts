import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../../../shared/';

import { StandardRevisionAnalyticsService } from '../standard-revision-analytics.service';
import { StandardRevisionChartComponent } from './standard-revision-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [StandardRevisionChartComponent],
  exports: [StandardRevisionChartComponent],
  providers: [StandardRevisionAnalyticsService]
})
export class StandardRevisionChartModule { }
