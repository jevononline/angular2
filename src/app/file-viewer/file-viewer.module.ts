import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileViewerRoutingModule } from './file-viewer-routing.module';
import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';
import { FileViewerService } from './file-viewer.service';
import { FileViewerComponent } from './file-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FileViewerRoutingModule,
    PdfViewerModule
  ],
  declarations: [FileViewerComponent],
  providers: [FileViewerService]
})
export class FileViewerModule { }
