import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSortModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

import { DialogModule, DateTimeModule, AvailabilityModule, getPaginatorIntl, TableModule } from '../../../../shared/';

import { PostFormModule } from './post-form/post-form.module';
import { DepartmentsService } from '../departments/departments.service';
import { PostsComponent } from './posts.component';

import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    DialogModule, DateTimeModule, AvailabilityModule, TableModule,
    PostFormModule
  ],
  declarations: [PostsComponent],
  exports: [PostsComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, DepartmentsService, PostsService]
})
export class PostsModule { }
