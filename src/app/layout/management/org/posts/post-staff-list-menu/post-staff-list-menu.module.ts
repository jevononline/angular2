import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { PostStaffListMenuComponent } from './post-staff-list-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule
  ],
  declarations: [PostStaffListMenuComponent],
  exports: [PostStaffListMenuComponent]
})
export class PostStaffListMenuModule { }
