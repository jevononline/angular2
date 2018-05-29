import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material';

import { StaffSelectModule } from '../../../org/staff/staff-select/staff-select.module';
import { UniqueValidatorModule } from '../../../../../shared/'
import { RoleSelectModule } from '../../roles/role-select/role-select.module';
import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';

import { UsersService } from '../users.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatSnackBarModule,
    StaffSelectModule, UniqueValidatorModule,
    RoleSelectModule,
    UserFormRoutingModule
  ],
  declarations: [UserFormComponent],
  providers: [UsersService]
})
export class UserFormModule { }

