import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { TimeSpanPipe } from './time-span.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [TimeSpanPipe],
  exports: [TimeSpanPipe]
})
export class TimeSpanModule { }
