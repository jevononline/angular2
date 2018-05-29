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
import { ResetPasswordFormComponent } from './reset-password-form.component';
import { UsersService } from '../users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatInputModule,
    EqualValidatorModule
  ],
  declarations: [ResetPasswordFormComponent],
  entryComponents: [ResetPasswordFormComponent],
  providers: [UsersService]
})
export class ResetPasswordFormModule { }
