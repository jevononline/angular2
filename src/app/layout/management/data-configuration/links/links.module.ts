import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule, MatDialogModule, } from '@angular/material';
import { DialogModule, DateTimeModule, getPaginatorIntl, TableModule } from '../../../../shared/';

import { LinkFormModule } from './link-form/link-form.module';
import { LinksService } from './links.service';
import { LinksComponent } from './links.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatDialogModule,
    DialogModule, DateTimeModule, TableModule,
    LinkFormModule
  ],
  declarations: [LinksComponent],
  exports: [LinksComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, LinksService]
})
export class LinksModule { }



