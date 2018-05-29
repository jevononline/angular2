

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material';

import { DateTimeModule } from '../../../../../shared/';
import { TasksService } from '../../../tasks/tasks.service';

import { StandardRevisionOpinionTableComponent } from './standard-revision-opinion-table.component';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    DateTimeModule
  ],
  declarations: [StandardRevisionOpinionTableComponent],
  exports: [StandardRevisionOpinionTableComponent],
  providers: [TasksService]
})
export class StandardRevisionOpinionTableModule { }
