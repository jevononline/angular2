import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonModule } from '../../shared/';

import { OnlineEditingRoutingModule } from './online-editing-routing.module';
import { OnlineEditingComponent } from './online-editing.component';

@NgModule({
  imports: [
    CommonModule,
    ComingSoonModule,
    OnlineEditingRoutingModule
  ],
  declarations: [OnlineEditingComponent]
})
export class OnlineEditingModule { }
