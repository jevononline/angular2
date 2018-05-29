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
  MatSortModule
} from '@angular/material';

import { DateTimeModule, WhetherModule, getPaginatorIntl, DialogModule, TableModule } from '../../../../shared/';

import { DepartmentsService } from './departments.service';
import { DepartmentsComponent } from './departments.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
    DateTimeModule, WhetherModule, DialogModule, TableModule
  ],
  declarations: [DepartmentsComponent],
  exports: [DepartmentsComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, DepartmentsService]
})
export class DepartmentsModule { }
