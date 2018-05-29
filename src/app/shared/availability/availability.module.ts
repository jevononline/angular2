import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material';
import { AvailabilityPipe } from './availability.pipe';
import { AvailabilityComponent } from './availability.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  declarations: [AvailabilityPipe, AvailabilityComponent],
  exports: [AvailabilityPipe, AvailabilityComponent]
})
export class AvailabilityModule { }
