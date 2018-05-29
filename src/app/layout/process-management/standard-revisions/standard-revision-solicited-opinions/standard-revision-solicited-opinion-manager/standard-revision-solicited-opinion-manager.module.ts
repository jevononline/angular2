

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule } from '@angular/material';

import { DateTimeModule, WhetherModule } from '../../../../../shared/';
import { TasksService } from '../../../tasks/tasks.service';

import { StandardRevisionSolicitedOpinionFormModule } from '../standard-revision-solicited-opinion-form/standard-revision-solicited-opinion-form.module';

import { StandardRevisionSolicitedOpinionManagerComponent } from './standard-revision-solicited-opinion-manager.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, FormsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule,
    DateTimeModule, WhetherModule,
    StandardRevisionSolicitedOpinionFormModule,
  ],
  declarations: [StandardRevisionSolicitedOpinionManagerComponent],
  exports: [StandardRevisionSolicitedOpinionManagerComponent],
  providers: [TasksService]
})
export class StandardRevisionSolicitedOpinionManagerModule { }
