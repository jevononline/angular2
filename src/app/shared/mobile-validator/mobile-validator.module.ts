import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileValidatorDirective } from './mobile-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MobileValidatorDirective],
  exports: [MobileValidatorDirective]
})
export class MobileValidatorModule { }
