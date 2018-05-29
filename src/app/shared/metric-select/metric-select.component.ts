import { values } from 'lodash';
import { Component, OnInit, Input, forwardRef } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { MetadataService } from '../../core/metadata/metadata.service'
import { SuperSelectComponent } from '../super-select/super-select.component';

@Component({
  selector: 'app-metric-select',
  templateUrl: './metric-select.component.html',
  styleUrls: ['./metric-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MetricSelectComponent), multi: true }],
})
export class MetricSelectComponent extends SuperSelectComponent {

  constructor(private metadataService: MetadataService) {
    super();
  }

  @Input()
  displayedIds: string[] = [];

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  get() {
    let items = values(this.metadataService.get('Metrics'));
    this.list = items.filter(item => this.displayedIds.indexOf(item.id) > -1);
  }

}
