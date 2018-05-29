import { Directive, forwardRef } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';


export function validateDocumentNo(c: AbstractControl) {
  const r = /^[a-zA-Z0-9]+[\w\s\-\.\\\/\:\_]*[a-zA-Z0-9]+$/i;

  return (!c.value || (r.test(c.value) && c.value.length > 0 && c.value.length <= 128)) ? null : {
    validateDocumentNo: true
  };
}

@Directive({
  selector: '[validateDocumentNo][ngModel],[validateDocumentNo][formControl],[validateDocumentNo][formControlName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => DocumentNoValidatorDirective), multi: true }]
})
export class DocumentNoValidatorDirective implements Validator {

  validator: Function;
  constructor() {
    this.validator = validateDocumentNo;
  }

  validate(c: AbstractControl) {
    return this.validator(c);
  }

}
