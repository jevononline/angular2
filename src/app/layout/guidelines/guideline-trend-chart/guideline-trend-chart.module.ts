import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';

import { TimeSpanModule } from '../../../shared/time-span/time-span.module';
import { GuidelinesService } from '../guidelines.service';
import { GuidelineTrendChartComponent } from './guideline-trend-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatDialogModule, MatButtonModule, MatTooltipModule, MatIconModule,
    TimeSpanModule
  ],
  declarations: [GuidelineTrendChartComponent],
  entryComponents: [GuidelineTrendChartComponent],
  providers: [GuidelinesService]
})
export class GuidelineTrendChartModule { }
