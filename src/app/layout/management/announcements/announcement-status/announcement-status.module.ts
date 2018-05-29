import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementStatusPipe } from './announcement-status.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnnouncementStatusPipe],
  exports: [AnnouncementStatusPipe]
})
export class AnnouncementStatusModule { }
