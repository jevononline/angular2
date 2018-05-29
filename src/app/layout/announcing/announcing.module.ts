import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { AnnouncementTableModule } from '../management/announcements/announcement-table/announcement-table.module';

import { AnnouncingRoutingModule } from './announcing-routing.module';
import { AnnouncingComponent } from './announcing.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatButtonModule, MatInputModule,
    AnnouncingRoutingModule, AnnouncementTableModule
  ],
  declarations: [AnnouncingComponent]
})
export class AnnouncingModule { }

