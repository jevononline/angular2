import { values } from 'lodash';
import { Component, OnInit, Input, forwardRef, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SuperSelectComponent } from '../../../super-select/super-select.component';

import { TimeSpanLevels } from '../time-span-levels';
import { TimeSpanLevel } from '../time-span-level';


@Component({
  selector: 'app-time-span-level-select',
  templateUrl: './time-span-level-select.component.html',
  styleUrls: ['./time-span-level-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TimeSpanLevelSelectComponent), multi: true }],

})
export class TimeSpanLevelSelectComponent extends SuperSelectComponent {

  @Input()
  timeSpanLevel: number = 1;

  constructor() {
    super();
  }

  // get() {

  // }

  ngOnChanges(changes: SimpleChanges) {
    let timeSpanLevelChange = changes.timeSpanLevel;
    if (timeSpanLevelChange) {
      this.list = [];
      TimeSpanLevels.forEach(item => {

        if ((item.key & timeSpanLevelChange.currentValue) === item.key) {
          this.list.push(item);
        }
      });

      if (this.list.length > 0) {
        this.myModel = this.list[0].value;
      }
      if (!timeSpanLevelChange.firstChange) {
        this.onChange();
      }
    }
  }

}

