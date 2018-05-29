import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNoValidatorDirective } from './document-no-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocumentNoValidatorDirective],
  exports: [DocumentNoValidatorDirective]
})
export class DocumentNoValidatorModule { }
