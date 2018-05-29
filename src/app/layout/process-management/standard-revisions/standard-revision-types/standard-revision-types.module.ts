import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardRevisionTypePipe } from './standard-revision-type.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StandardRevisionTypePipe],
  exports: [StandardRevisionTypePipe]
})
export class StandardRevisionTypesModule { }
