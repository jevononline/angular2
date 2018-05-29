import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

import { StandardCategorySelectComponent } from './standard-category-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [StandardCategorySelectComponent],
  exports: [StandardCategorySelectComponent]
})
export class StandardCategorySelectModule { }
