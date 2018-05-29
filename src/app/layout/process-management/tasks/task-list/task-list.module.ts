import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TasksService } from '../tasks.service';
import { TaskListComponent } from './task-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
  providers: [TasksService]
})
export class TaskListModule { }
