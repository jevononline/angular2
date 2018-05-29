
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatTooltipModule, MatInputModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { DialogModule, DateTimeModule, getPaginatorIntl, TableModule } from '../../../../shared/';

import { DepartmentSelectModule } from '../../org/departments/department-select/department-select.module';
import { PostSelectModule } from '../../org/posts/post-select/post-select.module';
import { StandardSystemSelectModule } from '../../../system-management/standard-system/standard-system-select/standard-system-select.module';
import { StandardSelectModule } from '../../../standard-management/standards/standard-select/standard-select.module';
import { PostStaffListMenuModule } from '../../org/posts/post-staff-list-menu/post-staff-list-menu.module';

import { PostStandardAssociationsService } from './post-standard-associations.service';
import { PostStandardAssociationsComponent } from './post-standard-associations.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatDialogModule,
    DialogModule, DateTimeModule, TableModule,
    DepartmentSelectModule, PostSelectModule,
    StandardSystemSelectModule, StandardSelectModule, PostStaffListMenuModule
  ],
  declarations: [PostStandardAssociationsComponent],
  exports: [PostStandardAssociationsComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, PostStandardAssociationsService]
})
export class PostStandardAssociationsModule { }



