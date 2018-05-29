import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhetherPipe } from './whether.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WhetherPipe],
  exports: [WhetherPipe]
})
export class WhetherModule { }
