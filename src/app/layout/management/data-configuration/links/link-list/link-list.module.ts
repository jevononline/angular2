import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LinksService } from '../links.service';
import { LinkListComponent } from './link-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [LinkListComponent],
  exports: [LinkListComponent],
  providers: [LinksService]
})
export class LinkListModule { }
