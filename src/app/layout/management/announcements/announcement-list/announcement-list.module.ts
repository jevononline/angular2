import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AnnouncementListComponent } from './announcement-list.component';
import { AnnouncementsService } from '../announcements.service';
import { AnnouncementDetailModule } from '../announcement-detail/announcement-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AnnouncementDetailModule
  ],
  declarations: [AnnouncementListComponent],
  exports: [AnnouncementListComponent],
  providers: [AnnouncementsService]
})
export class AnnouncementListModule { }
