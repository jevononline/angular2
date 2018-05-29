import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueValidatorDirective } from './unique-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UniqueValidatorDirective],
  exports: [UniqueValidatorDirective]
})
export class UniqueValidatorModule { }
