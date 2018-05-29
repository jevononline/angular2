import { findIndex, intersectionWith } from 'lodash';
import { Component, OnInit, OnChanges, SimpleChanges, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SuperSelectComponent } from '../../../../shared/';
import { Standard } from '../standard';
import { StandardSystem } from '../../../system-management/standard-system/standard-system';

import { StandardsService } from '../standards.service';

@Component({
  selector: 'app-standard-select',
  templateUrl: './standard-select.component.html',
  styleUrls: ['./standard-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardSelectComponent), multi: true }],
  exportAs: 'appStandardSelect'
})
export class StandardSelectComponent extends SuperSelectComponent {

  @Input()
  standardSystems: StandardSystem[] = [];

  constructor(private standardsService: StandardsService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.standardSystems) {
      if (!changes.standardSystems.firstChange) {
        this.get().then(() => {
          this.optionsChange();
          //  
          this.onChange();
        });
      }
    }
  }

  standards: Standard[] = [];

  get() {
    return new Promise<any[]>((resolve) => {
      if (this.standardSystems && this.standardSystems.length > 0) {
        let ids = this.standardSystems.filter(item => !!item).map(item => item.id);
        if (ids.length > 0) {
          this.standardsService.getGroupedByStandardSystems(ids).subscribe(data => {
            resolve(data);
          });
        } else {
          resolve([]);
        }
      } else {
        resolve([]);
      }
    }).then(data => {
      this.list = data;
      if (this.list.length > 0) {
        this.standards = this.list.map(item => item.standards).reduce((prev, curr) => prev.concat(curr), []);
      } else {
        this.standards = [];
      }
    });
  }

  optionsChange() {

    if (this.multiple) {
      this.myModel = intersectionWith(this.myModel, this.standards, this.compareWith);
    } else {
      if (this.myModel) {
        if (!(findIndex(this.standards, { id: this.myModel.id }) > -1)) {
          this.myModel = undefined;
        }
      }
    }
  }

  selectAll() {
    if (this.multiple) {
      this.myModel = this.standards;
      this.onChange();
    }
  }

  filterList(keyword) {

  }
}
