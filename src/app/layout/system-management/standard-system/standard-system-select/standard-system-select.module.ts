import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

import { TreeModule } from 'angular-tree-component';

import { StandardSystemSelectComponent } from './standard-system-select.component';
import { StandardSystemService } from '../standard-system.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatMenuModule, MatButtonModule, MatInputModule, MatIconModule,
    TreeModule
  ],
  declarations: [StandardSystemSelectComponent],
  exports: [StandardSystemSelectComponent],
  providers: [StandardSystemService]
})
export class StandardSystemSelectModule { }

