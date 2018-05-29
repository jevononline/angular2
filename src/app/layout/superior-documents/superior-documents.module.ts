import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule } from '@angular/material';
import { DialogModule, DateTimeModule, TimeSpanModule, DownloadModule, getPaginatorIntl, TableModule } from '../../shared/';
import { SuperiorDocumentsService } from './superior-documents.service';
import { SuperiorDocumentsRoutingModule } from './superior-documents-routing.module';
import { SuperiorDocumentsComponent } from './superior-documents.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, TimeSpanModule, DownloadModule, TableModule,
    SuperiorDocumentsRoutingModule
  ],
  declarations: [SuperiorDocumentsComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, SuperiorDocumentsService]
})
export class SuperiorDocumentsModule { }

