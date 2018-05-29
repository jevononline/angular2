import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatIconModule, MatInputModule } from '@angular/material';

import { StaffSelectComponent } from './staff-select.component';
import { StaffService } from '../staff.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule, MatIconModule, MatInputModule
  ],
  declarations: [StaffSelectComponent],
  exports: [StaffSelectComponent],
  providers: [StaffService]
})
export class StaffSelectModule { }
