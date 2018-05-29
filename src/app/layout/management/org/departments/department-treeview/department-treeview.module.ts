import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatDialogModule, MatSnackBarModule, MatButtonModule, MatTooltipModule, MatInputModule, MatIconModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';

import { DialogModule } from '../../../../../shared/';
import { DepartmentTreeviewComponent } from './department-treeview.component';
import { DepartmentsService } from '../departments.service';

import { DepartmentFormModule } from '../department-form/department-form.module';
import { DepartmentLeaderFormModule } from '../department-leader-form/department-leader-form.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatButtonModule, MatTooltipModule, MatInputModule, MatIconModule,
    TreeModule,
    DialogModule, DepartmentFormModule, DepartmentLeaderFormModule
  ],
  declarations: [DepartmentTreeviewComponent],
  exports: [DepartmentTreeviewComponent],
  providers: [DepartmentsService]
})
export class DepartmentTreeviewModule { }

