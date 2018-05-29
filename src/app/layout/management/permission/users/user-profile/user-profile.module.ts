import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { UsersService } from '../users.service';
import { ChangePasswordFormModule } from '../change-password-form/change-password-form.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule,
    ChangePasswordFormModule
  ],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
  providers: [UsersService]
})
export class UserProfileModule { }
