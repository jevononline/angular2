import { Subscription } from 'rxjs/Subscription';
import { Directive, Input, OnDestroy, SimpleChanges, forwardRef } from '@angular/core';

import { Validator, ValidationErrors, NgModel, AbstractControl, NG_VALIDATORS } from '@angular/forms';


export function validateEqual(to: string) {
  return (c: AbstractControl) => {
    if (c.value && c.value !== c.root.get(this.to).value) {
      return { validateEqual: true };
    }
    return null;
  }
}

@Directive({
  selector: '[validateEqual][ngModel],[validateEqual][formControl],[validateEqual][formControlName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }]
})
export class EqualValidatorDirective implements Validator, OnDestroy {

  validator: Function;

  @Input('validateEqual')
  to: string;

  subscription: Subscription;

  constructor() {
    this.validator = validateEqual;

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  validate(c: AbstractControl) {
    if (!this.subscription) {
      this.subscription = c.root.get(this.to).valueChanges.subscribe(() => {
        console.count('asdf');
        c.updateValueAndValidity();
      });
    }
    return this.validator(this.to)(c);
  }

}
