import { find, values } from 'lodash';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MetadataService } from '../../../../../../core/metadata/metadata.service';
import { SuperSelectComponent } from '../../../../../../shared/';

@Component({
  selector: 'app-staff-status-select',
  templateUrl: './staff-status-select.component.html',
  styleUrls: ['./staff-status-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StaffStatusSelectComponent), multi: true }]
})
export class StaffStatusSelectComponent extends SuperSelectComponent {

  constructor(private metadataService: MetadataService) {
    super();
  }
  get() {
    this.list = values(this.metadataService.get('StaffStatuses'));
  }

}
