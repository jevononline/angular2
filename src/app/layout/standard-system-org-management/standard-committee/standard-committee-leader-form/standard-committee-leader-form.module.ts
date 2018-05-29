import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { StaffSelectModule } from '../../../management/org/staff/staff-select/staff-select.module';
import { StandardCommitteeLeaderFormComponent } from './standard-committee-leader-form.component';
import { StandardCommitteeService } from '../standard-committee.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    StaffSelectModule
  ],
  declarations: [StandardCommitteeLeaderFormComponent],
  entryComponents: [StandardCommitteeLeaderFormComponent],
  providers: [StandardCommitteeService]
})
export class StandardCommitteeLeaderFormModule { }
