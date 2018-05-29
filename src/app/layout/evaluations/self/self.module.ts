import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfRoutingModule } from './self-routing.module';
import { SelfComponent } from './self.component';

@NgModule({
  imports: [
    CommonModule,
    SelfRoutingModule
  ],
  declarations: [SelfComponent]
})
export class SelfModule { }
