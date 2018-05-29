import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material';

import { GuidelinesService } from '../guidelines.service';
import { GuidelineLatestComponent } from './guideline-latest.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatIconModule
  ],
  declarations: [GuidelineLatestComponent],
  exports: [GuidelineLatestComponent],
  providers: [GuidelinesService]
})
export class GuidelineLatestModule { }
