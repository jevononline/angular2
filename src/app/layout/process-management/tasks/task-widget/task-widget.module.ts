import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { TaskListModule } from '../task-list/task-list.module';

import { TaskWidgetComponent } from './task-widget.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule, MatTooltipModule, MatIconModule,
    TaskListModule
  ],
  declarations: [TaskWidgetComponent],
  exports: [TaskWidgetComponent]
})
export class TaskWidgetModule { }
