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
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { DialogModule, DateTimeModule, WhetherModule, AvailabilityModule, getPaginatorIntl, TableModule } from '../../../../shared/';

import { PostSelectModule } from '../posts/post-select/post-select.module';
import { StaffStatusModule } from './staff-status/staff-status.module';
import { StaffFormModule } from './staff-form/staff-form.module';

import { StaffComponent } from './staff.component';

import { StaffService } from './staff.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatSnackBarModule,
    DialogModule, DateTimeModule, WhetherModule, AvailabilityModule, TableModule,
    PostSelectModule, StaffStatusModule, StaffFormModule
  ],
  declarations: [StaffComponent],
  exports: [StaffComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, StaffService]
})
export class StaffModule { }
