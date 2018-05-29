
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatDialogModule, MatSnackBarModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';

import { DialogModule } from '../../../../shared/';
import { StandardCommitteeTreeviewComponent } from './standard-committee-treeview.component';
import { StandardCommitteeService } from '../standard-committee.service';

import { StandardCommitteeFormModule } from '../standard-committee-form/standard-committee-form.module';
import { StandardCommitteeLeaderFormModule } from '../standard-committee-leader-form/standard-committee-leader-form.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatButtonModule, MatInputModule, MatIconModule,
    TreeModule,
    DialogModule,
    StandardCommitteeFormModule, StandardCommitteeLeaderFormModule,
  ],
  declarations: [StandardCommitteeTreeviewComponent],
  exports: [StandardCommitteeTreeviewComponent],
  providers: [StandardCommitteeService]
})
export class StandardCommitteeTreeviewModule { }

