import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';

import { UploadModule } from '../upload/upload.module';
import { DownloadModule } from '../download/download.module';
import { FileTicketChipModule } from '../file-ticket-chip/file-ticket-chip.module';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ImportDialogComponent } from './import-dialog/import-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule, MatButtonModule, MatIconModule,
    UploadModule, DownloadModule, FileTicketChipModule
  ],
  declarations: [ConfirmDialogComponent, ErrorDialogComponent, ImportDialogComponent],
  exports: [ConfirmDialogComponent, ErrorDialogComponent, ImportDialogComponent],
  entryComponents: [ConfirmDialogComponent, ErrorDialogComponent, ImportDialogComponent]
})
export class DialogModule { }

export * from './confirm-dialog/confirm-dialog.component';
export * from './error-dialog/error-dialog.component';

export * from './import-dialog/import-dialog.component';
