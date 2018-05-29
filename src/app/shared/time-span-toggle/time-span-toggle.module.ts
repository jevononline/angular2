import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material';

import { TimeSpanSelectModule } from '../time-span/time-span-select/time-span-select.module';
import { TimeSpanToggleComponent } from './time-span-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonToggleModule,
    TimeSpanSelectModule
  ],
  declarations: [TimeSpanToggleComponent],
  exports: [TimeSpanToggleComponent]
})
export class TimeSpanToggleModule { }
