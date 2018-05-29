import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessTypePipe } from './process-type.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProcessTypePipe],
  exports: [ProcessTypePipe]
})
export class ProcessTypesModule { }
