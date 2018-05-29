import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

import { YearSelectComponent } from './year-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [YearSelectComponent],
  exports: [YearSelectComponent]
})
export class YearSelectModule { }
