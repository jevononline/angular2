import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditsRoutingModule } from './audits-routing.module';
import { AuditsComponent } from './audits.component';

@NgModule({
  imports: [
    CommonModule,
    AuditsRoutingModule
  ],
  declarations: [AuditsComponent]
})
export class AuditsModule { }
