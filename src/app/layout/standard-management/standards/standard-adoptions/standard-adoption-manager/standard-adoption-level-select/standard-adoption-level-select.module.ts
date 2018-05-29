import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { StandardAdoptionLevelSelectComponent } from './standard-adoption-level-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [StandardAdoptionLevelSelectComponent],
  exports: [StandardAdoptionLevelSelectComponent]
})
export class StandardAdoptionLevelSelectModule { }
