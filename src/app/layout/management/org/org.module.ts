import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material';

import { DepartmentTreeviewModule } from './departments/department-treeview/department-treeview.module';
import { DepartmentsModule } from './departments/departments.module';
import { PostsModule } from './posts/posts.module';
import { StaffModule } from './staff/staff.module';

import { OrgRoutingModule } from './org-routing.module';
import { OrgComponent } from './org.component';
import { OrgService } from './org.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    DepartmentTreeviewModule,
    DepartmentsModule, PostsModule, StaffModule,
    OrgRoutingModule
  ],
  declarations: [OrgComponent],
  providers: [OrgService]
})
export class OrgModule { }


