import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';

import { PrivilegesService } from '../privileges.service';
import { PrivilegeSelectComponent } from './privilege-select.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    TreeModule
  ],
  declarations: [PrivilegeSelectComponent],
  exports: [PrivilegeSelectComponent],
  providers: [PrivilegesService]
})
export class PrivilegeSelectModule { }
