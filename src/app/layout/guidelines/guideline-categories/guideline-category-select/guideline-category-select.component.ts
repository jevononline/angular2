import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SuperSelectComponent } from '../../../../shared/';

import { GuidelineCategory } from '../guideline-category';
import { GuidelineCategoriesService } from '../guideline-categories.service';

@Component({
  selector: 'app-guideline-category-select',
  templateUrl: './guideline-category-select.component.html',
  styleUrls: ['./guideline-category-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => GuidelineCategorySelectComponent), multi: true }]
})
export class GuidelineCategorySelectComponent extends SuperSelectComponent {

  constructor(private guidelineCategoriesService: GuidelineCategoriesService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  get() {
    this.guidelineCategoriesService.get().subscribe(data => {
      this.list = data.results;
    });
  }

}

