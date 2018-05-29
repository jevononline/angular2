import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadDirective } from './download.directive';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [DownloadDirective],
  exports: [DownloadDirective]
})
export class DownloadModule { }
