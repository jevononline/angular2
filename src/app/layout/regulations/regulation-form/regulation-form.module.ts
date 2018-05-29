import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { UploadModule, DocumentNoValidatorModule, APP_DATE_FORMATS } from '../../../shared/';

import { RegulationCategorySelectModule } from '../regulation-categories/regulation-category-select/regulation-category-select.module';

import { RegulationsService } from '../regulations.service';

import { RegulationFormRoutingModule } from './regulation-form-routing.module';
import { RegulationFormComponent } from './regulation-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatNativeDateModule, MatDatepickerModule,
    UploadModule, DocumentNoValidatorModule,
    RegulationCategorySelectModule,
    RegulationFormRoutingModule
  ],
  declarations: [RegulationFormComponent],
  providers: [
    RegulationsService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class RegulationFormModule { }
