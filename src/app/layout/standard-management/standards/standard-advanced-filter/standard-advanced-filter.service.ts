import { Injectable } from '@angular/core';

import { StandardAdvancedFilter } from './standard-advanced-filter';

@Injectable()
export class StandardAdvancedFilterService {

  constructor() { }

  myFilter: StandardAdvancedFilter;

  get filter() {
    return this.myFilter;
  }

  set filter(value) {
    this.myFilter = value;
  }
}
