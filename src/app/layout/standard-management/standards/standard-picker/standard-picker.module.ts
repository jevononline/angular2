import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';

import { StandardAdvancedFilterModule } from '../standard-advanced-filter/standard-advanced-filter.module';
import { StandardTableModule } from '../standard-table/standard-table.module';

import { StandardPickerComponent } from './standard-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatInputModule, MatIconModule, MatDialogModule,
    StandardAdvancedFilterModule, StandardTableModule
  ],
  declarations: [StandardPickerComponent],
  entryComponents: [StandardPickerComponent]
})
export class StandardPickerModule { }
