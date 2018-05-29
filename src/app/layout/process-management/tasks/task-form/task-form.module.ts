import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule, MatSnackBarModule, MatButtonModule, MatIconModule, MatInputModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { APP_DATE_FORMATS } from '../../../../shared/';

import { ProcessesService } from '../../processes/processes.service';
import { TaskFormRoutingModule } from './task-form-routing.module';
import { TaskFormComponent } from './task-form.component';
import { TaskFormResolve } from './task-form-resolver';
import { TasksService } from '../tasks.service';
import { StandardRevisionsService } from '../../standard-revisions/standard-revisions.service';

import { DepartmentSelectModule } from '../../../management/org/departments/department-select/department-select.module';
import { UserSelectModule } from '../../../management/permission/users/user-select/user-select.module';
import { StandardRevisionPlanManagerModule } from '../../standard-revision-plans/standard-revision-plan-manager/standard-revision-plan-manager.module';
import { StandardRevisionPlanOpinionManagerModule } from '../../standard-revision-plans/standard-revision-plan-opinions/standard-revision-plan-opinion-manager/standard-revision-plan-opinion-manager.module';

import { StandardRevisionManagerModule } from '../../standard-revisions/standard-revision-manager/standard-revision-manager.module';
import { StandardRevisionOpinionTableModule } from '../../standard-revisions/standard-revision-opinions/standard-revision-opinion-table/standard-revision-opinion-table.module';
import { StandardRevisionSolicitedOpinionManagerModule } from '../../standard-revisions/standard-revision-solicited-opinions/standard-revision-solicited-opinion-manager/standard-revision-solicited-opinion-manager.module';

import { TaskStandardRevisionPlanSetReceivingDepartmentsComponent } from './task-standard-revision-plan-set-receiving-departments/task-standard-revision-plan-set-receiving-departments.component';
import { TaskStandardRevisionPlanSetEditorComponent } from './task-standard-revision-plan-set-editor/task-standard-revision-plan-set-editor.component';
import { TaskStandardRevisionPlanEditComponent } from './task-standard-revision-plan-edit/task-standard-revision-plan-edit.component';
import { TaskStandardRevisionPlanReviewComponent } from './task-standard-revision-plan-review/task-standard-revision-plan-review.component';
import { TaskStandardRevisionPlanAndOpinionReviewComponent } from './task-standard-revision-plan-and-opinion-review/task-standard-revision-plan-and-opinion-review.component';
import { TaskStandardRevisionPlanPublishComponent } from './task-standard-revision-plan-publish/task-standard-revision-plan-publish.component';
import { TaskStandardRevisionEditComponent } from './task-standard-revision-edit/task-standard-revision-edit.component';
import { TaskStandardRevisionReviewComponent } from './task-standard-revision-review/task-standard-revision-review.component';
import { TaskStandardRevisionStandardOfficeReviewComponent } from './task-standard-revision-standard-office-review/task-standard-revision-standard-office-review.component';
import { TaskStandardRevisionSolicitingComponent } from './task-standard-revision-soliciting/task-standard-revision-soliciting.component';
import { TaskStandardRevisionAndSolicitedOpinionReviewComponent } from './task-standard-revision-and-solicited-opinion-review/task-standard-revision-and-solicited-opinion-review.component';
import { TaskStandardRevisionPublishComponent } from './task-standard-revision-publish/task-standard-revision-publish.component';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, FormsModule, RouterModule,
    MatDialogModule, MatSnackBarModule, MatButtonModule, MatIconModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,
    DepartmentSelectModule, UserSelectModule, StandardRevisionPlanManagerModule, StandardRevisionPlanOpinionManagerModule,
    StandardRevisionManagerModule, StandardRevisionOpinionTableModule, StandardRevisionSolicitedOpinionManagerModule,
    TaskFormRoutingModule
  ],
  declarations: [
    TaskFormComponent,
    TaskStandardRevisionPlanSetReceivingDepartmentsComponent,
    TaskStandardRevisionPlanSetEditorComponent,
    TaskStandardRevisionPlanEditComponent,
    TaskStandardRevisionPlanReviewComponent,
    TaskStandardRevisionPlanAndOpinionReviewComponent,
    TaskStandardRevisionPlanPublishComponent,
    TaskStandardRevisionEditComponent,
    TaskStandardRevisionReviewComponent,
    TaskStandardRevisionStandardOfficeReviewComponent,
    TaskStandardRevisionSolicitingComponent,
    TaskStandardRevisionAndSolicitedOpinionReviewComponent,
    TaskStandardRevisionPublishComponent,

  ],
  providers: [
    ProcessesService, TaskFormResolve, TasksService, StandardRevisionsService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class TaskFormModule { }
