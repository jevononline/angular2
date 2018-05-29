import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardCategoryPipe } from './standard-category.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StandardCategoryPipe],
  exports: [StandardCategoryPipe]
})
export class StandardCategoryModule { }
