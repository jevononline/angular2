import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { StaffSelectModule } from '../../../../management/org/staff/staff-select/staff-select.module';

import { StandardCommitteeTicketFormComponent } from './standard-committee-ticket-form.component';
import { StandardCommitteeTicketsService } from '../standard-committee-tickets.service';

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
  declarations: [StandardCommitteeTicketFormComponent],
  entryComponents: [StandardCommitteeTicketFormComponent],
  providers: [StandardCommitteeTicketsService]
})
export class StandardCommitteeTicketFormModule { }
