import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material';

import { MetricSelectComponent } from './metric-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [MetricSelectComponent],
  exports: [MetricSelectComponent]
})
export class MetricSelectModule { }
