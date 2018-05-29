import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

import { PdfViewerComponent } from './pdf-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule
  ],
  declarations: [PdfViewerComponent],
  exports: [PdfViewerComponent]
})
export class PdfViewerModule { }
