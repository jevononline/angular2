
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { UploadModule, DownloadModule, DocumentNoValidatorModule, UniqueValidatorModule, APP_DATE_FORMATS } from '../../../../shared/';

import { StandardRevisionTypesModule } from '../standard-revision-types/standard-revision-types.module';
import { StandardSystemSelectModule } from '../../../system-management/standard-system/standard-system-select/standard-system-select.module';
import { DepartmentSelectModule } from '../../../management/org/departments/department-select/department-select.module';
import { UserSelectModule } from '../../../management/permission/users/user-select/user-select.module';
import { StandardSelectModule } from '../../../standard-management/standards/standard-select/standard-select.module';
import { StandardPickerModule } from '../../../standard-management/standards/standard-picker/standard-picker.module';
import { StandardTableManagerModule } from '../../../standard-management/standards/standard-table-manager/standard-table-manager.module';

import { StandardRevisionManagerComponent } from './standard-revision-manager.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, FlexLayoutModule,
    MatDialogModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatNativeDateModule, MatDatepickerModule,
    UploadModule, DownloadModule, DocumentNoValidatorModule, UniqueValidatorModule,
    StandardRevisionTypesModule,
    StandardSystemSelectModule, DepartmentSelectModule, UserSelectModule, StandardSelectModule, StandardPickerModule, StandardTableManagerModule
  ],
  declarations: [StandardRevisionManagerComponent],
  exports: [StandardRevisionManagerComponent],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class StandardRevisionManagerModule { }
