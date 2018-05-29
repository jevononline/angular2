import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injector, ReflectiveInjector, Directive, OnInit, Input, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator, ValidationErrors, AbstractControl, NG_ASYNC_VALIDATORS, } from '@angular/forms';

export function validateUnique(http: HttpClient, validateUrl: string) {
  return (c: AbstractControl): Observable<ValidationErrors> => {
    return c.value ? Observable.timer(1000).switchMap(() => {
      return http.post(`${validateUrl}`, { value: c.value })
        .map(() => null)
        .catch(() => Observable.of({ validateUnique: true }));
    }) : Observable.of(null);
  };
}

@Directive({
  selector: '[validateUnique][ngModel],[validateUnique][formControl],[validateUnique][formControlName]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => UniqueValidatorDirective), multi: true }]
})
export class UniqueValidatorDirective implements AsyncValidator, OnInit {
  validator: Function;
  @Input()
  validateUrl: string;

  constructor(public http: HttpClient) {

  }

  ngOnInit() {
    this.validator = validateUnique(this.http, this.validateUrl);
  }

  validate(c: AbstractControl) {
    return this.validator(c);
  }

}
