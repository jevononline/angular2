
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { AnnouncementWidgetComponent } from './announcement-widget.component';
import { AnnouncementListModule } from '../announcement-list/announcement-list.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule, MatTooltipModule, MatIconModule,
    AnnouncementListModule
  ],
  declarations: [AnnouncementWidgetComponent],
  exports: [AnnouncementWidgetComponent]
})
export class AnnouncementWidgetModule { }
