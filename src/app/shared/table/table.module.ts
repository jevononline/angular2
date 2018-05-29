import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material';
import { TableContainerComponent } from './table-container/table-container.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [TableContainerComponent],
  exports: [TableContainerComponent]
})
export class TableModule { }
