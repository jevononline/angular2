import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule, MatCheckboxModule,
  MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule
} from '@angular/material';

import { DialogModule, DateTimeModule, DownloadModule, AvailabilityModule, getPaginatorIntl, TableModule } from '../../../../../shared/';
import { ResetPasswordFormModule } from '../reset-password-form/reset-password-form.module';
import { UsersService } from '../users.service';
import { UserTableComponent } from './user-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule, MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    DialogModule, DateTimeModule, DownloadModule, AvailabilityModule, TableModule,
    ResetPasswordFormModule
  ],
  declarations: [UserTableComponent],
  exports: [UserTableComponent],
  providers: [
    { provide: MatPaginatorIntl, useFactory: getPaginatorIntl },
    UsersService
  ]
})
export class UserTableModule { }
