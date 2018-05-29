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

import { DialogModule, DateTimeModule, DownloadModule, getPaginatorIntl, TableModule } from '../../../../shared/';

import { StandardCategoryModule } from '../standard-category/standard-category.module';
import { StandardsService } from '../standards.service';
import { StandardLogsService } from '../../../standard-logs/standard-logs.service'
import { StandardTableComponent } from './standard-table.component';

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
    DialogModule, DateTimeModule, DownloadModule, TableModule,
    StandardCategoryModule
  ],
  declarations: [StandardTableComponent],
  exports: [StandardTableComponent],
  providers: [
    { provide: MatPaginatorIntl, useFactory: getPaginatorIntl },
    StandardsService,
    StandardLogsService
  ]
})
export class StandardTableModule { }
