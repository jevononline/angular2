import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffStatusPipe } from './staff-status.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StaffStatusPipe],
  exports: [StaffStatusPipe]
})
export class StaffStatusModule { }

