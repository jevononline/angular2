import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatIconModule, MatInputModule } from '@angular/material';

import { StandardSelectComponent } from './standard-select.component';

import { StandardsService } from '../standards.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatSelectModule, MatIconModule, MatInputModule
  ],
  declarations: [StandardSelectComponent],
  exports: [StandardSelectComponent],
  providers: [StandardsService]
})
export class StandardSelectModule { }
