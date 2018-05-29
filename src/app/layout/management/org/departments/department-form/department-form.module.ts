import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { DepartmentFormComponent } from './department-form.component';
import { DepartmentsService } from '../departments.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [DepartmentFormComponent],
  entryComponents: [DepartmentFormComponent],
  providers: [DepartmentsService]
})
export class DepartmentFormModule { }
