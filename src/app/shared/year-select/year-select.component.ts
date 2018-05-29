
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SuperSelectComponent } from '../super-select/super-select.component';

@Component({
  selector: 'app-year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => YearSelectComponent), multi: true }],

})
export class YearSelectComponent extends SuperSelectComponent {
  years: number[] = [];

  constructor() {
    super();
  }

  get() {
    let year = new Date().getFullYear();
    let startYear = 2015;
    let endYear = year + 30;

    let years = [];
    for (let i = startYear; i < endYear; i++) {
      years.push(i);
    }
    this.list = years;
  }

}
