import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { ProcessesService } from '../processes.service';

import { ProcessDiagramComponent } from './process-diagram.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule, MatButtonModule
  ],
  providers: [ProcessesService],
  declarations: [ProcessDiagramComponent],
  entryComponents: [ProcessDiagramComponent]
})
export class ProcessDiagramModule { }
