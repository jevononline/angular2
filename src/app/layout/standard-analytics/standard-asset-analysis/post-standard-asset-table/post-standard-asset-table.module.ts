import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material';

import { PostStandardAssetTableComponent } from './post-standard-asset-table.component';
import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule
  ],
  declarations: [PostStandardAssetTableComponent],
  exports: [PostStandardAssetTableComponent],
  providers: [StandardAssetAnalyticsService]
})
export class PostStandardAssetTableModule { }
