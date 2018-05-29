
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule } from '../../../../shared/';

import { StandardCategorySelectModule } from '../../../standard-management/standards/standard-category/standard-category-select/standard-category-select.module';
import { StandardSystemStandardCategoryChartComponent } from './standard-system-standard-category-chart.component';

import { StandardSystemService } from '../standard-system.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, FlexLayoutModule,
    ChartModule,
    StandardCategorySelectModule
  ],
  providers: [StandardSystemService],
  declarations: [StandardSystemStandardCategoryChartComponent],
  exports: [StandardSystemStandardCategoryChartComponent]
})
export class StandardSystemStandardCategoryChartModule { }
