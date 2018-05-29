import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DimensionSelectModule } from '../../../shared/';

import { StandardAssetChartModule } from './standard-asset-chart/standard-asset-chart.module';
import { StandardCategoryChartModule } from './standard-category-chart/standard-category-chart.module';
import { StandardSystemChartModule } from './standard-system-chart/standard-system-chart.module'
import { StandardAssetAnalysisComponent } from './standard-asset-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DimensionSelectModule,
    StandardAssetChartModule, StandardCategoryChartModule, StandardSystemChartModule
  ],
  declarations: [StandardAssetAnalysisComponent],
  exports: [StandardAssetAnalysisComponent]
})
export class StandardAssetAnalysisModule { }
