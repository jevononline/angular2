import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { UniqueValidatorModule } from '../../../../shared/';
import { StandardSpecialCommitteeSelectModule } from '../../../standard-system-org-management/standard-committee/standard-special-committee-select/standard-special-committee-select.module';

import { StandardSystemFormComponent } from './standard-system-form.component';
import { StandardSystemService } from '../standard-system.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    UniqueValidatorModule, StandardSpecialCommitteeSelectModule
  ],
  declarations: [StandardSystemFormComponent],
  entryComponents: [StandardSystemFormComponent],
  providers: [StandardSystemService]
})
export class StandardSystemFormModule { }
