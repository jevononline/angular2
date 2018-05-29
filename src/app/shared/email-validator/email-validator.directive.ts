import { Directive, forwardRef } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';


export function validateEmail(c: AbstractControl) {
  const r = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/i;
  return (!c.value || r.test(c.value)) ? null : {
    validateEmail: true
  };
}

@Directive({
  selector: '[validateEmail][ngModel],[validateEmail][formControl],[validateEmail][formControlName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }]
})
export class EmailValidatorDirective implements Validator {

  validator: Function;
  constructor() {
    this.validator = validateEmail;
  }

  validate(c: AbstractControl) {
    return this.validator(c);
  }

}
