import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';
import { EqualValidatorModule } from '../../../../../shared/';
import { ChangePasswordFormComponent } from './change-password-form.component';
import { UsersService } from '../users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatInputModule, MatSnackBarModule,
    EqualValidatorModule
  ],
  declarations: [ChangePasswordFormComponent],
  entryComponents: [ChangePasswordFormComponent],
  providers: [UsersService]
})
export class ChangePasswordFormModule { }
