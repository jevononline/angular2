import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { LinkListModule } from '../link-list/link-list.module';
import { LinkWidgetComponent } from './link-widget.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule,
    LinkListModule
  ],
  declarations: [LinkWidgetComponent],
  exports: [LinkWidgetComponent]
})
export class LinkWidgetModule { }
