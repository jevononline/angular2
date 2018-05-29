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

import { StandardNetworkLeaderFormComponent } from './standard-network-leader-form.component';
import { StandardNetworkService } from '../standard-network.service';

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
  declarations: [StandardNetworkLeaderFormComponent],
  entryComponents: [StandardNetworkLeaderFormComponent],
  providers: [StandardNetworkService]
})
export class StandardNetworkLeaderFormModule { }
