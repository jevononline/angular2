import { Directive, forwardRef } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';


export function validateMobile(c: AbstractControl) {
  const r = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/i;
  return (!c.value || r.test(c.value)) ? null : {
    validateMobile: true
  };
}

@Directive({
  selector: '[validateMobile][ngModel],[validateMobile][formControl],[validateMobile][formControlName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MobileValidatorDirective), multi: true }]
})
export class MobileValidatorDirective implements Validator {

  validator: Function;
  constructor() {
    this.validator = validateMobile;
  }

  validate(c: AbstractControl) {
    return this.validator(c);
  }

}
