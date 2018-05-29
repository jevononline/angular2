import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { StandardAdoptionLevelSelectModule } from './standard-adoption-level-select/standard-adoption-level-select.module';
import { StandardAdoptionManagerComponent } from './standard-adoption-manager.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, FormsModule,
    MatSelectModule, MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule,
    StandardAdoptionLevelSelectModule
  ],
  declarations: [StandardAdoptionManagerComponent],
  exports: [StandardAdoptionManagerComponent]
})
export class StandardAdoptionManagerModule { }
