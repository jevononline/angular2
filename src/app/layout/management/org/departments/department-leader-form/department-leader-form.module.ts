import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';


import { StaffSelectModule } from '../../staff/staff-select/staff-select.module';
import { DepartmentLeaderFormComponent } from './department-leader-form.component';
import { DepartmentsService } from '../departments.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatSnackBarModule,
    StaffSelectModule
  ],
  declarations: [DepartmentLeaderFormComponent],
  entryComponents: [DepartmentLeaderFormComponent],
  providers: [DepartmentsService]
})
export class DepartmentLeaderFormModule { }
