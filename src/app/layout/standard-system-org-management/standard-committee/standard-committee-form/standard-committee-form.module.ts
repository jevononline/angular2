import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { StandardCommitteeTagSelectModule } from '../../standard-committee-tags/standard-committee-tag-select/standard-committee-tag-select.module'
import { StandardCommitteeFormComponent } from './standard-committee-form.component';
import { StandardCommitteeService } from '../standard-committee.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    StandardCommitteeTagSelectModule
  ],
  declarations: [StandardCommitteeFormComponent],
  entryComponents: [StandardCommitteeFormComponent],
  providers: [StandardCommitteeService]
})
export class StandardCommitteeFormModule { }
