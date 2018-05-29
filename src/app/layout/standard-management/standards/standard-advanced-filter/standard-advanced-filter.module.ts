import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule, MatMenuModule, MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';


import { APP_DATE_FORMATS } from '../../../../shared/';

import { DepartmentSelectModule } from '../../../management/org/departments/department-select/department-select.module';
import { StandardCategorySelectModule } from '../standard-category/standard-category-select/standard-category-select.module';
import { StandardAdvancedFilterComponent } from './standard-advanced-filter.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule, MatMenuModule, MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule,
    DepartmentSelectModule, StandardCategorySelectModule
  ],
  declarations: [StandardAdvancedFilterComponent],
  exports: [StandardAdvancedFilterComponent],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class StandardAdvancedFilterModule { }
