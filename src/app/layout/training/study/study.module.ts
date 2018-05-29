import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material';
import { PostStandardAssociationsModule } from '../../management/data-configuration/post-standard-associations/post-standard-associations.module';
import { StudyRoutingModule } from './study-routing.module';
import { StudyComponent } from './study.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    PostStandardAssociationsModule,
    StudyRoutingModule
  ],
  declarations: [StudyComponent]
})
export class StudyModule { }
