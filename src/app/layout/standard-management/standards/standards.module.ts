import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { StandardSystemTreeviewModule } from '../../system-management/standard-system/standard-system-treeview/standard-system-treeview.module';
import { StandardTableModule } from './standard-table/standard-table.module';
import { StandardAdvancedFilterModule } from './standard-advanced-filter/standard-advanced-filter.module';

import { StandardsRoutingModule } from './standards-routing.module';
import { StandardsComponent } from './standards.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatTabsModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule, MatSnackBarModule,
    StandardSystemTreeviewModule, StandardTableModule, StandardAdvancedFilterModule,
    StandardsRoutingModule
  ],
  declarations: [StandardsComponent]
})
export class StandardsModule { }
