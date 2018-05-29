import { find, values } from 'lodash';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MetadataService } from '../../../../../core/metadata/metadata.service';
import { SuperSelectComponent } from '../../../../../shared/';

@Component({
  selector: 'app-standard-category-select',
  templateUrl: './standard-category-select.component.html',
  styleUrls: ['./standard-category-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardCategorySelectComponent), multi: true }]
})
export class StandardCategorySelectComponent extends SuperSelectComponent {

  constructor(private metadataService: MetadataService) {
    super();
  }

  get() {
    this.list = values(this.metadataService.get('StandardCategories'));
  }

}
