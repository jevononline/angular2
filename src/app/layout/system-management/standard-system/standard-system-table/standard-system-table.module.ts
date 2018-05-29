import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSortModule,
  MatSnackBarModule
} from '@angular/material';

import { DateTimeModule, getPaginatorIntl, TableModule } from '../../../../shared/';


import { StandardSystemTableComponent } from './standard-system-table.component';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DateTimeModule, TableModule
  ],
  declarations: [StandardSystemTableComponent],
  exports: [StandardSystemTableComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }]
})
export class StandardSystemTableModule { }
