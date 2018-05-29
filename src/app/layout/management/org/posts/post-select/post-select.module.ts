import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule, MatIconModule } from '@angular/material';
import { DepartmentTreeviewModule } from '../../departments/department-treeview/department-treeview.module';
import { PostSelectComponent } from './post-select.component';
import { PostsService } from '../posts.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatSelectModule, MatInputModule, MatIconModule
  ],
  declarations: [PostSelectComponent],
  exports: [PostSelectComponent],
  providers: [PostsService]
})
export class PostSelectModule { }
