

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { ReplacingDocumentNoManagerComponent } from './replacing-document-no-manager.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule
  ],
  declarations: [ReplacingDocumentNoManagerComponent],
  exports: [ReplacingDocumentNoManagerComponent]
})
export class ReplacingDocumentNoManagerModule { }
