import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProcessesService } from '../processes.service';
import { TableModule } from '../../../../shared/';
import { DetailRoutingModule } from './detail-routing.module';
import { ProcessDetailComponent } from './process-detail.component';
import { ProcessStart, SetReceivingDepartment, SetEditor, ProcessEdit, DepartmentReview, StandardOfficeReview, TechnicalCommitteeReview, ManagementCommitteeReview, StandardCommitteeReview, ProcessPublish } from './process-detail-task';
import {
  MatIconModule, MatTooltipModule, MatButtonModule, MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
  	CommonModule, FlexLayoutModule, MatIconModule, MatTooltipModule, MatButtonModule, MatTableModule,
  	TableModule, DetailRoutingModule
  ],
  declarations: [ProcessDetailComponent, ProcessStart, SetReceivingDepartment, SetEditor, ProcessEdit, DepartmentReview, StandardOfficeReview, TechnicalCommitteeReview, ManagementCommitteeReview, StandardCommitteeReview, ProcessPublish ],
  providers: [
  	ProcessesService
  ]
})
export class ProcessDetailModule { }
