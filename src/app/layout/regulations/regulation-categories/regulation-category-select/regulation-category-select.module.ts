import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { RegulationCategorySelectComponent } from './regulation-category-select.component';
import { RegulationCategoriesService } from '../regulation-categories.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, MatSelectModule
  ],
  declarations: [RegulationCategorySelectComponent],
  exports: [RegulationCategorySelectComponent],
  providers: [RegulationCategoriesService]
})
export class RegulationCategorySelectModule { }

