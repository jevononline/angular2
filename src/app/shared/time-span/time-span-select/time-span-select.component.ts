import { find } from 'lodash';
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { TimeSpanLevels } from '../time-span-levels/time-span-levels';
import { TimeSpanLevel } from '../time-span-levels/time-span-level';

@Component({
  selector: 'app-time-span-select',
  templateUrl: './time-span-select.component.html',
  styleUrls: ['./time-span-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TimeSpanSelectComponent), multi: true }]
})
export class TimeSpanSelectComponent implements OnInit, ControlValueAccessor {

  @Input()
  floatPlaceholder;

  @Input()
  required: boolean;

  @Input()
  timeSpanLevel: number = 1;

  @Input()
  disabled = false;

  selectedTimeSpanLevel: number = 1;

  year: number;
  quarter: number;
  month: number;

  quarters = [1, 2, 3, 4];
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  @Output()
  change = new EventEmitter();

  onChangeCallback = (z) => { };
  onTouchedCallback = () => { };

  constructor() {

  }

  ngOnInit() {

  }

  onChange() {
    let value = [this.selectedTimeSpanLevel];
    if (this.detectTimeSpanLevel(1)) {
      value.push(this.year);
    }
    if (this.detectTimeSpanLevel(2)) {
      value.push(this.quarter);
    }
    if (this.detectTimeSpanLevel(4)) {
      value.push(this.month);
    }
    this.onChangeCallback(value);
    this.change.emit(value);
  }

  onTimeSpanLevelChange() {
    if (!this.quarter) {
      this.quarter = this.quarters[0];
    }
    if (!this.month) {
      this.month = this.months[0];
    }
    this.onChange();
  }

  writeValue(value: any) {
    // 年：1，季度：2，月度：4
    // [1,2017] 年度
    // [3,2017,4] 季度
    // [5,2017,12] 月度
    if (Array.isArray(value)) {
      let [level] = value;
      let timeSpanLevel = find(TimeSpanLevels, { value: level });
      if (timeSpanLevel) {
        this.selectedTimeSpanLevel = level;
        if (this.detectTimeSpanLevel(1)) {
          this.year = value[1];
        }
        if (this.detectTimeSpanLevel(2)) {
          this.quarter = Number(value[2]);
        }
        if (this.detectTimeSpanLevel(4)) {
          this.month = Number(value[2]);
        }
      }
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  };

  detectTimeSpanLevel(level: number) {
    if (this.selectedTimeSpanLevel) {
      return (this.selectedTimeSpanLevel & level) === level;
    } else {
      return false;
    }
  }



}
