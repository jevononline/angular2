import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TimeSpanToggleModule, MetricSelectModule } from '../../../shared/';

import { StandardUsageRankChartModule } from './standard-usage-rank-chart/standard-usage-rank-chart.module';

import { StandardUsageAnalysisComponent } from './standard-usage-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    TimeSpanToggleModule, MetricSelectModule,
    StandardUsageRankChartModule
  ],
  declarations: [StandardUsageAnalysisComponent],
  exports: [StandardUsageAnalysisComponent]
})
export class StandardUsageAnalysisModule { }
