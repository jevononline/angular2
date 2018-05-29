import { values } from 'lodash';
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MetadataService } from '../../../../../../core/metadata/metadata.service';
import { SuperSelectComponent } from '../../../../../../shared/';

@Component({
  selector: 'app-standard-adoption-level-select',
  templateUrl: './standard-adoption-level-select.component.html',
  styleUrls: ['./standard-adoption-level-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardAdoptionLevelSelectComponent), multi: true }]
})
export class StandardAdoptionLevelSelectComponent extends SuperSelectComponent {

  constructor(private metadataService: MetadataService) {
    super();
  }

  get() {
    this.list = values(this.metadataService.get('StandardAdoptionLevels'));
  }

}
