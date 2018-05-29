import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatDialogModule, MatSnackBarModule, MatButtonModule, MatTooltipModule, MatInputModule, MatIconModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';

import { DialogModule } from '../../../../shared/';
import { StandardSystemTreeviewComponent } from './standard-system-treeview.component';
import { StandardSystemService } from '../standard-system.service';

import { StandardSystemFormModule } from '../standard-system-form/standard-system-form.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatButtonModule, MatTooltipModule, MatInputModule, MatIconModule,
    TreeModule,
    DialogModule, StandardSystemFormModule
  ],
  declarations: [StandardSystemTreeviewComponent],
  exports: [StandardSystemTreeviewComponent],
  providers: [StandardSystemService]
})
export class StandardSystemTreeviewModule { }

