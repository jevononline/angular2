import { find, intersection } from 'lodash';
import { Component, OnInit, OnChanges, SimpleChanges, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SuperSelectComponent } from '../../../../shared/';

import { RegulationCategory } from '../regulation-category';
import { RegulationCategoriesService } from '../regulation-categories.service';

@Component({
  selector: 'app-regulation-category-select',
  templateUrl: './regulation-category-select.component.html',
  styleUrls: ['./regulation-category-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RegulationCategorySelectComponent), multi: true }]
})
export class RegulationCategorySelectComponent extends SuperSelectComponent {

  constructor(private regulationCategoriesService: RegulationCategoriesService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  get() {
    this.regulationCategoriesService.get().subscribe(data => {
      this.list = data.results;
    });
  }

}

