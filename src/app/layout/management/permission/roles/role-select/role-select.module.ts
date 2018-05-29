import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { RoleSelectComponent } from './role-select.component';
import { RolesService } from '../roles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, MatSelectModule
  ],
  declarations: [RoleSelectComponent],
  exports: [RoleSelectComponent],
  providers: [RolesService]
})
export class RoleSelectModule { }
