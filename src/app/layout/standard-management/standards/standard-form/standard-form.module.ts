
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule, MatInputModule, MatButtonModule, MatIconModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { UploadModule, DocumentNoValidatorModule, UniqueValidatorModule, APP_DATE_FORMATS } from '../../../../shared/';
import { StandardSystemSelectModule } from '../../../system-management/standard-system/standard-system-select/standard-system-select.module';
import { StandardCategorySelectModule } from '../standard-category/standard-category-select/standard-category-select.module';
import { DepartmentSelectModule } from '../../../management/org/departments/department-select/department-select.module';
import { UserSelectModule } from '../../../management/permission/users/user-select/user-select.module';
import { StandardAdoptionManagerModule } from '../standard-adoptions/standard-adoption-manager/standard-adoption-manager.module';
import { StandardReplacingManagerModule } from '../standard-replacing-manager/standard-replacing-manager.module';
import { StandardFormRoutingModule } from './standard-form-routing.module';
import { StandardFormComponent } from './standard-form.component';


import { StandardsService } from '../standards.service';
import { StandardLogsService } from '../../../standard-logs/standard-logs.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, FormsModule,
    MatSnackBarModule, MatInputModule, MatButtonModule, MatIconModule, MatNativeDateModule, MatDatepickerModule,
    UploadModule, DocumentNoValidatorModule, UniqueValidatorModule, StandardSystemSelectModule, StandardCategorySelectModule, DepartmentSelectModule, UserSelectModule,
    StandardAdoptionManagerModule, StandardReplacingManagerModule,
    StandardFormRoutingModule
  ],
  declarations: [StandardFormComponent],
  providers: [
    StandardsService,
    StandardLogsService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class StandardFormModule { }
