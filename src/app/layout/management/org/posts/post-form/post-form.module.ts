import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatInputModule, MatRadioModule, MatButtonModule } from '@angular/material';

import { DepartmentSelectModule } from '../../departments/department-select/department-select.module';
import { PostsService } from '../posts.service';

import { PostFormComponent } from './post-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, FlexLayoutModule,
    MatDialogModule, MatInputModule, MatRadioModule, MatButtonModule,
    DepartmentSelectModule
  ],
  declarations: [PostFormComponent],
  entryComponents: [PostFormComponent],
  providers: [PostsService]
})
export class PostFormModule { }
