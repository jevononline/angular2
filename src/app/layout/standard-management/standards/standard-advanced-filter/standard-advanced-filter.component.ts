import * as moment from 'moment';
import { Component, Input, Optional, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material';

import { Department } from '../../../management/org/departments/department';
import { StandardAdvancedFilter, StandardAdvancedFilterSerialized } from './standard-advanced-filter';

@Component({
  selector: 'app-standard-advanced-filter',
  templateUrl: './standard-advanced-filter.component.html',
  styleUrls: ['./standard-advanced-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StandardAdvancedFilterComponent implements OnInit, AfterViewInit {

  model: StandardAdvancedFilter = new StandardAdvancedFilter();

  @Input()
  value: StandardAdvancedFilterSerialized = new StandardAdvancedFilterSerialized();

  @Output()
  set = new EventEmitter();

  isSet = false;

  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  @ViewChild(MatMenu)
  menu: MatMenu;

  constructor() { }

  ngOnInit() {
    if (this.value) {
      // 必填

    }
  }

  ngAfterViewInit() {
    if (this.trigger) {
      this.trigger.onMenuOpen.subscribe(() => {
        this.model = this.deserialize(this.value);
      });
    }
  }


  hasFilter() {
    let value = this.value;
    return !!(
      (value.departments && value.departments.length > 0)
      || value.publishStartDate
      || value.publishEndDate
      || value.executeStartDate
      || value.executeEndDate
      || (value.categoryValues && value.categoryValues.length > 0)
    );
  }

  onSubmit() {
    this.trigger.closeMenu();

    this.value = this.serialize(this.model);
    this.isSet = this.hasFilter();
    this.set.emit(this.value);
  }

  serialize(model: StandardAdvancedFilter): StandardAdvancedFilterSerialized {
    return {
      departments: model.departments && model.departments.map(item => item.id),
      publishStartDate: model.publishStartDate && moment(model.publishStartDate).format('YYYY-MM-DD'),
      publishEndDate: model.publishEndDate && moment(model.publishEndDate).format('YYYY-MM-DD'),
      executeStartDate: model.executeStartDate && moment(model.executeStartDate).format('YYYY-MM-DD'),
      executeEndDate: model.executeEndDate && moment(model.executeEndDate).format('YYYY-MM-DD'),
      categoryValues: model.categoryValues
    };
  }

  deserialize(value: StandardAdvancedFilterSerialized): StandardAdvancedFilter {
    return {
      departments: value.departments && value.departments.map(item => ({ id: item } as Department)),
      publishStartDate: value.publishStartDate && moment(value.publishStartDate).toDate(),
      publishEndDate: value.publishEndDate && moment(value.publishEndDate).toDate(),
      executeStartDate: value.executeStartDate && moment(value.executeStartDate).toDate(),
      executeEndDate: value.executeEndDate && moment(value.executeEndDate).toDate(),
      categoryValues: value.categoryValues
    };
  }
}
