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

import { StandardNetworkTicketFormComponent } from './standard-network-ticket-form.component';
import { StandardNetworkTicketsService } from '../standard-network-tickets.service';

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
  declarations: [StandardNetworkTicketFormComponent],
  entryComponents: [StandardNetworkTicketFormComponent],
  providers: [StandardNetworkTicketsService]
})
export class StandardNetworkTicketFormModule { }
