import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { GuidelineCategorySelectComponent } from './guideline-category-select.component';
import { GuidelineCategoriesService } from '../guideline-categories.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, MatSelectModule
  ],
  declarations: [GuidelineCategorySelectComponent],
  exports: [GuidelineCategorySelectComponent],
  providers: [GuidelineCategoriesService]
})
export class GuidelineCategorySelectModule { }
