import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';

import { DepartmentSelectComponent } from './department-select.component';
import { DepartmentsService } from '../departments.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatMenuModule, MatButtonModule, MatInputModule, MatIconModule,
    TreeModule
  ],
  declarations: [DepartmentSelectComponent],
  exports: [DepartmentSelectComponent],
  providers: [DepartmentsService]
})
export class DepartmentSelectModule { }

