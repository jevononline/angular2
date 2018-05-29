
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatInputModule, MatIconModule, MatButtonModule, MatRadioModule } from '@angular/material';

import { StandardRevisionPlanOpinionFormComponent } from './standard-revision-plan-opinion-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, FlexLayoutModule,
    MatDialogModule, MatInputModule, MatIconModule, MatButtonModule, MatRadioModule
  ],
  declarations: [StandardRevisionPlanOpinionFormComponent],
  entryComponents: [StandardRevisionPlanOpinionFormComponent],
  providers: []
})
export class StandardRevisionPlanOpinionFormModule { }
