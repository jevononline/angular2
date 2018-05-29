import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemMapService } from './system-map.service';
import { SystemMapComponent } from './system-map.component';
import { SystemMapForPostComponent } from './system-map-for-post/system-map-for-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SystemMapComponent, SystemMapForPostComponent],
  exports: [SystemMapComponent, SystemMapForPostComponent],
  providers: [SystemMapService]
})
export class SystemMapModule { }
