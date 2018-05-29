import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { UniqueValidatorModule } from '../../../../../shared/';
import { PrivilegeSelectModule } from '../../privileges/privilege-select/privilege-select.module';
import { RolesService } from '../roles.service';
import { RoleFormRoutingModule } from './role-form-routing.module';
import { RoleFormComponent } from './role-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule, MatButtonModule, MatSnackBarModule,
    UniqueValidatorModule,
    PrivilegeSelectModule,
    RoleFormRoutingModule
  ],
  declarations: [RoleFormComponent],
  providers: [RolesService]
})
export class RoleFormModule { }
