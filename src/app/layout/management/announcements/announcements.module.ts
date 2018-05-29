import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementTableModule } from './announcement-table/announcement-table.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatButtonModule, MatInputModule,
    AnnouncementsRoutingModule, AnnouncementTableModule
  ],
  declarations: [AnnouncementsComponent]
})
export class AnnouncementsModule { }
