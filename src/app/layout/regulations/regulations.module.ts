import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule } from '@angular/material';
import { DialogModule, DateTimeModule, TimeSpanModule, DownloadModule, getPaginatorIntl, TableModule } from '../../shared/';

import { RegulationCategorySelectModule } from './regulation-categories/regulation-category-select/regulation-category-select.module';

import { RegulationsRoutingModule } from './regulations-routing.module';
import { RegulationsService } from './regulations.service';
import { RegulationsComponent } from './regulations.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, TimeSpanModule, DownloadModule, TableModule,
    RegulationCategorySelectModule,
    RegulationsRoutingModule
  ],
  declarations: [RegulationsComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, RegulationsService]
})
export class RegulationsModule { }


