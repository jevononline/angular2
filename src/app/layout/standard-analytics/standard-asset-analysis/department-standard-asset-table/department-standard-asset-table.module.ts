import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material';
import { DepartmentStandardAssetTableComponent } from './department-standard-asset-table.component';

import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule
  ],
  declarations: [DepartmentStandardAssetTableComponent],
  exports: [DepartmentStandardAssetTableComponent],
  providers: [StandardAssetAnalyticsService]
})
export class DepartmentStandardAssetTableModule { }

