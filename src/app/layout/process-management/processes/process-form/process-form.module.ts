import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';

import { ProcessFormComponent } from './process-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule, MatButtonModule, MatInputModule
  ],
  declarations: [ProcessFormComponent],
  entryComponents: [ProcessFormComponent]
})
export class ProcessFormModule { }
