

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material';

import { DimensionSelectComponent } from './dimension-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [DimensionSelectComponent],
  exports: [DimensionSelectComponent]
})
export class DimensionSelectModule { }
