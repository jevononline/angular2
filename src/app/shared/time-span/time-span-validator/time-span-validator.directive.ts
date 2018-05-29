import { Directive, forwardRef } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';


export function validateTimeSpan(c: AbstractControl) {
  let valid = false;
  let value = c.value;

  if (Array.isArray(value)) {
    let [level, ...o] = value;
    if (level === 0) {
      valid = true;
    } else if (level === 1) {
      if (o.length === 1 && o.every(item => typeof item === 'number')) {
        valid = true;
      }
    } else if (level === 3 || level === 5) {
      if (o.length === 2 && o.every(item => typeof item === 'number')) {
        valid = true;
      }
    }
  }
  console.log(valid)
  return valid ? null : {
    validateTimeSpan: true
  };
}

@Directive({
  selector: '[validateTimeSpan][ngModel],[validateTimeSpan][formControl],[validateTimeSpan][formControlName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => TimeSpanValidatorDirective), multi: true }]
})
export class TimeSpanValidatorDirective implements Validator {

  validator: Function;
  constructor() {
    this.validator = validateTimeSpan;
  }

  validate(c: AbstractControl) {
    return this.validator(c);
  }

}
