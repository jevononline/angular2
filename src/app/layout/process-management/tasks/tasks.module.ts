

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatTabsModule, MatMenuModule, MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule,
  MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule,
} from '@angular/material';
import { DialogModule, DateTimeModule, getPaginatorIntl, TableModule } from '../../../shared/';

import { ProcessDiagramModule } from '../processes/process-diagram/process-diagram.module';

import { TasksService } from './tasks.service';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { TaskDoneTableComponent } from './task-done-table/task-done-table.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule, MatMenuModule, MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, TableModule,
    ProcessDiagramModule,
    TasksRoutingModule
  ],
  declarations: [TasksComponent, TaskTableComponent, TaskDoneTableComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, TasksService]
})
export class TasksModule { }
