import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnableStatusPipe } from './enable-status.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EnableStatusPipe],
  exports: [EnableStatusPipe]
})
export class EnableStatusModule { }
