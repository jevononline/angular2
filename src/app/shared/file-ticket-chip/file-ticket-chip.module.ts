import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { FileTicketChipComponent } from './file-ticket-chip.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule
  ],
  declarations: [FileTicketChipComponent],
  exports: [FileTicketChipComponent]
})
export class FileTicketChipModule { }
