import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatInputModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { EmailValidatorModule, MobileValidatorModule, UniqueValidatorModule } from '../../../../../shared/';

import { StaffStatusSelectModule } from '../staff-status/staff-status-select/staff-status-select.module';

import { DepartmentSelectModule } from '../../departments/department-select/department-select.module';
import { PostSelectModule } from '../../posts/post-select/post-select.module';
import { StaffService } from '../staff.service';

import { StaffFormComponent } from './staff-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, FlexLayoutModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatRadioModule,
    EmailValidatorModule, MobileValidatorModule, UniqueValidatorModule,
    StaffStatusSelectModule,
    DepartmentSelectModule, PostSelectModule
  ],
  declarations: [StaffFormComponent],
  entryComponents: [StaffFormComponent],
  providers: [StaffService]
})
export class StaffFormModule { }

