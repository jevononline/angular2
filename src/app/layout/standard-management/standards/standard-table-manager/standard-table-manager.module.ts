import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatTableModule, MatSortModule
} from '@angular/material';

import { DownloadModule, TableModule } from '../../../../shared/';

import { StandardsService } from '../standards.service';
import { StandardTableManagerComponent } from './standard-table-manager.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    DownloadModule, TableModule
  ],
  declarations: [StandardTableManagerComponent],
  exports: [StandardTableManagerComponent],
  providers: [
    StandardsService
  ]
})
export class StandardTableManagerModule { }
