import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSpanValidatorDirective } from './time-span-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimeSpanValidatorDirective],
  exports: [TimeSpanValidatorDirective]
})
export class TimeSpanValidatorModule { }
