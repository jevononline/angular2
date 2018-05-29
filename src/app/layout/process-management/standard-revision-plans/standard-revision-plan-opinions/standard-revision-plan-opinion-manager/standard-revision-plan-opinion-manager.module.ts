

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule } from '@angular/material';

import { DateTimeModule, WhetherModule } from '../../../../../shared/';
import { TasksService } from '../../../tasks/tasks.service';

import { StandardRevisionPlanOpinionFormModule } from '../standard-revision-plan-opinion-form/standard-revision-plan-opinion-form.module';

import { StandardRevisionPlanOpinionManagerComponent } from './standard-revision-plan-opinion-manager.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, FormsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule,
    DateTimeModule, WhetherModule,
    StandardRevisionPlanOpinionFormModule,
  ],
  declarations: [StandardRevisionPlanOpinionManagerComponent],
  exports: [StandardRevisionPlanOpinionManagerComponent],
  providers: [TasksService]
})
export class StandardRevisionPlanOpinionManagerModule { }
