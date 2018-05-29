import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatIconModule } from '@angular/material';

import { GuidelineCategoriesService } from '../guideline-categories/guideline-categories.service';
import { GuidelineTrendChartModule } from '../guideline-trend-chart/guideline-trend-chart.module'
import { GuidelineWidgetComponent } from './guideline-widget.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule, MatIconModule,
    GuidelineTrendChartModule
  ],
  declarations: [GuidelineWidgetComponent],
  exports: [GuidelineWidgetComponent],
  providers: [GuidelineCategoriesService]
})
export class GuidelineWidgetModule { }
