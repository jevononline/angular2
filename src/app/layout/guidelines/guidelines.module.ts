import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatTooltipModule, MatButtonModule, MatInputModule,
  MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule,
} from '@angular/material';
import { DialogModule, DateTimeModule, TimeSpanModule, getPaginatorIntl, TableModule } from '../../shared/';
import { GuidelineCategorySelectModule } from './guideline-categories/guideline-category-select/guideline-category-select.module';

import { GuidelinesService } from './guidelines.service';
import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { GuidelinesComponent } from './guidelines.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, TimeSpanModule, TableModule, GuidelineCategorySelectModule,
    GuidelinesRoutingModule
  ],
  declarations: [GuidelinesComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, GuidelinesService]
})
export class GuidelinesModule { }
