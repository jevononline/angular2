import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatDialogModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';

import { DialogModule } from '../../../../shared/';

import { StandardNetworkTreeviewComponent } from './standard-network-treeview.component';
import { StandardNetworkService } from '../standard-network.service';

import { StandardNetworkLeaderFormModule } from '../standard-network-leader-form/standard-network-leader-form.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatMenuModule, MatDialogModule, MatButtonModule, MatInputModule, MatIconModule,
    TreeModule,
    DialogModule, StandardNetworkLeaderFormModule
  ],
  declarations: [StandardNetworkTreeviewComponent],
  exports: [StandardNetworkTreeviewComponent],
  providers: [StandardNetworkService]
})
export class StandardNetworkTreeviewModule { }

