
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatMenuModule, MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule,
  MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule,
} from '@angular/material';
import { DialogModule, DateTimeModule, getPaginatorIntl, TableModule } from '../../../shared/';
import { ProcessTypesModule } from './process-types/process-types.module';
import { ProcessFormModule } from "./process-form/process-form.module";
import { ProcessSettingsModule } from './process-settings/process-settings.module';
import { ProcessesService } from './processes.service';

import { ProcessesRoutingModule } from './processes-routing.module';
import { ProcessesComponent } from './processes.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatMenuModule, MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, TableModule,
    ProcessTypesModule, ProcessFormModule, ProcessSettingsModule,
    ProcessesRoutingModule
  ],
  declarations: [ProcessesComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, ProcessesService]
})
export class ProcessesModule { }
