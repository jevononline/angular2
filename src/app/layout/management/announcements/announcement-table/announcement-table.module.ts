import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule
} from '@angular/material';

import { DialogModule, DateTimeModule, getPaginatorIntl, TableModule } from '../../../../shared/';


import { AnnouncementDetailModule } from '../announcement-detail/announcement-detail.module';
import { AnnouncementStatusModule } from '../announcement-status/announcement-status.module';
import { AnnouncementsService } from '../announcements.service';
import { AnnouncementTableComponent } from './announcement-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    DialogModule, DateTimeModule, TableModule,
    AnnouncementDetailModule,
    AnnouncementStatusModule
  ],
  declarations: [AnnouncementTableComponent],
  exports: [AnnouncementTableComponent],
  providers: [
    { provide: MatPaginatorIntl, useFactory: getPaginatorIntl },
    AnnouncementsService
  ]
})
export class AnnouncementTableModule { }
