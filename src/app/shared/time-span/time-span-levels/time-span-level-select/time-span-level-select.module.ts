import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material';
import { TimeSpanLevelSelectComponent } from './time-span-level-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [TimeSpanLevelSelectComponent],
  exports: [TimeSpanLevelSelectComponent]
})
export class TimeSpanLevelSelectModule { }
