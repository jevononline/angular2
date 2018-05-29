import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

import { YearSelectModule } from '../../year-select/year-select.module';
import { TimeSpanLevelSelectModule } from '../time-span-levels/time-span-level-select/time-span-level-select.module';

import { TimeSpanSelectComponent } from './time-span-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    YearSelectModule,
    TimeSpanLevelSelectModule
  ],
  declarations: [TimeSpanSelectComponent],
  exports: [TimeSpanSelectComponent]
})
export class TimeSpanSelectModule { }