import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material';

import { PostStandardAssociationsModule } from './post-standard-associations/post-standard-associations.module';
import { LinksModule } from './links/links.module';

import { DataConfigurationComponent } from './data-configuration.component';
import { DataConfigurationRoutingModule } from './data-configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatTabsModule,
    PostStandardAssociationsModule, LinksModule,
    DataConfigurationRoutingModule
  ],
  declarations: [DataConfigurationComponent]
})
export class DataConfigurationModule { }
