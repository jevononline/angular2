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
import { StandardCommitteeTicketFormModule } from './standard-committee-ticket-form/standard-committee-ticket-form.module';
import { StandardCommitteeTicketsComponent } from './standard-committee-tickets.component';
import { SystemOrgTicketsService } from '../../../system-orgs/system-org-tickets/system-org-tickets.service';
import { StandardCommitteeTicketsService } from './standard-committee-tickets.service'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, WhetherModule, AvailabilityModule, TableModule,
    StaffStatusModule,
    SystemOrgTicketsModule, StandardCommitteeTicketFormModule
  ],
  declarations: [StandardCommitteeTicketsComponent],
  exports: [StandardCommitteeTicketsComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, SystemOrgTicketsService, StandardCommitteeTicketsService]
})
export class StandardCommitteeTicketsModule { }

