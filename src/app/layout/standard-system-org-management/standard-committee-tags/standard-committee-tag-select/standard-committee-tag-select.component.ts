import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SuperSelectComponent } from '../../../../shared/';

import { StandardCommitteeTagsService } from '../standard-committee-tags.service';

@Component({
  selector: 'app-standard-committee-tag-select',
  templateUrl: './standard-committee-tag-select.component.html',
  styleUrls: ['./standard-committee-tag-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardCommitteeTagSelectComponent), multi: true }]
})
export class StandardCommitteeTagSelectComponent extends SuperSelectComponent {

  constructor(private standardCommitteeTagsService: StandardCommitteeTagsService) {
    super();
  }

  get() {
    this.standardCommitteeTagsService.get().subscribe(data => {
      this.list = data;
    });
  }

}
