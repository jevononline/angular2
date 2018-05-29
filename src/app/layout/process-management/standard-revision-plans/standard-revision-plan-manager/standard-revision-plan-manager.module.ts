
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule } from '@angular/material';

import { DateTimeModule, DownloadModule, UploadModule } from '../../../../shared/';
import { TasksService } from '../../tasks/tasks.service';

import { StandardRevisionFormModule } from '../../standard-revisions/standard-revision-form/standard-revision-form.module';
import { StandardRevisionTypesModule } from '../../standard-revisions/standard-revision-types/standard-revision-types.module';

import { StandardRevisionPlanManagerComponent } from './standard-revision-plan-manager.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, FormsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule,
    DateTimeModule, DownloadModule, UploadModule,
    StandardRevisionFormModule, StandardRevisionTypesModule,
  ],
  declarations: [StandardRevisionPlanManagerComponent],
  exports: [StandardRevisionPlanManagerComponent],
  providers: [TasksService]
})
export class StandardRevisionPlanManagerModule { }
