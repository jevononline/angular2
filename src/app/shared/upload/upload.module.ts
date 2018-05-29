import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadComponent } from './upload.component';
import { FileTicketChipModule } from '../file-ticket-chip/file-ticket-chip.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule,
    FileUploadModule,
    FileTicketChipModule
  ],
  declarations: [UploadComponent],
  exports: [UploadComponent]
})
export class UploadModule { }
