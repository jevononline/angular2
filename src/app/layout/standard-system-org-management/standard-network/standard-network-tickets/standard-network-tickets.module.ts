import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSortModule,
  MatSnackBarModule
} from '@angular/material';

import { DialogModule, DateTimeModule, WhetherModule, AvailabilityModule, getPaginatorIntl, TableModule } from '../../../../shared/';
import { StaffStatusModule } from '../../../management/org/staff/staff-status/staff-status.module';

import { SystemOrgTicketsModule } from '../../../system-orgs/system-org-tickets/system-org-tickets.module';
import { StandardNetworkTicketFormModule } from '../standard-network-tickets/standard-network-ticket-form/standard-network-ticket-form.module'

import { StandardNetworkTicketsComponent } from './standard-network-tickets.component';
import { StandardNetworkTicketsService } from './standard-network-tickets.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, WhetherModule, AvailabilityModule, TableModule,
    StaffStatusModule,
    SystemOrgTicketsModule, StandardNetworkTicketFormModule
  ],
  declarations: [StandardNetworkTicketsComponent],
  exports: [StandardNetworkTicketsComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, StandardNetworkTicketsService]
})
export class StandardNetworkTicketsModule { }

