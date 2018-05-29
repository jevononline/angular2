import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

import { GuidelineCategorySelectModule } from '../guideline-categories/guideline-category-select/guideline-category-select.module';
import { TimeSpanSelectModule, TimeSpanValidatorModule } from '../../../shared/';
import { GuidelineFormRoutingModule } from './guideline-form-routing.module';
import { GuidelineFormComponent } from './guideline-form.component';

import { GuidelinesService } from '../guidelines.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule,
    GuidelineCategorySelectModule, TimeSpanSelectModule, TimeSpanValidatorModule,
    GuidelineFormRoutingModule
  ],
  declarations: [GuidelineFormComponent],
  providers: [GuidelinesService]
})
export class GuidelineFormModule { }

