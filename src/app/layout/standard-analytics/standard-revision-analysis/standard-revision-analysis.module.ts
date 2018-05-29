import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { TimeSpanToggleModule } from '../../../shared/';

import { StandardRevisionTypeChartModule } from './standard-revision-type-chart/standard-revision-type-chart.module';
import { StandardRevisionChartModule } from './standard-revision-chart/standard-revision-chart.module';
import { StandardUsageChartModule } from '../standard-usage-analysis/standard-usage-chart/standard-usage-chart.module';
import { PostStandardAssetTableModule } from '../standard-asset-analysis/post-standard-asset-table/post-standard-asset-table.module';
import { DepartmentStandardAssetTableModule } from '../standard-asset-analysis/department-standard-asset-table/department-standard-asset-table.module';

import { StandardRevisionAnalysisComponent } from './standard-revision-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    TimeSpanToggleModule,
    StandardRevisionTypeChartModule,
    StandardRevisionChartModule,
    StandardUsageChartModule,
    PostStandardAssetTableModule,
    DepartmentStandardAssetTableModule
  ],
  declarations: [StandardRevisionAnalysisComponent],
  exports: [StandardRevisionAnalysisComponent]
})
export class StandardRevisionAnalysisModule { }
