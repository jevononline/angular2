import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

import { StaffStatusSelectComponent } from './staff-status-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [StaffStatusSelectComponent],
  exports: [StaffStatusSelectComponent]
})
export class StaffStatusSelectModule { }
