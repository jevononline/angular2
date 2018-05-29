import { values } from 'lodash';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { MetadataService } from '../../core/metadata/metadata.service'
import { SuperSelectComponent } from '../super-select/super-select.component';

@Component({
  selector: 'app-dimension-select',
  templateUrl: './dimension-select.component.html',
  styleUrls: ['./dimension-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DimensionSelectComponent), multi: true }],
})
export class DimensionSelectComponent extends SuperSelectComponent {

  constructor(private metadataService: MetadataService) {
    super();
  }

  @Input()
  displayedIds: string[] = [];

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  get() {
    let items = values(this.metadataService.get('Dimensions'));
    this.list = items.filter(item => this.displayedIds.indexOf(item.id) > -1);
  }

}
