import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { UserTableModule } from '../../users/user-table/user-table.module';

import { RoleUserAssociationComponent } from './role-user-association.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatDialogModule,
    UserTableModule, MatButtonModule, MatInputModule, MatIconModule
  ],
  declarations: [RoleUserAssociationComponent],
  entryComponents: [RoleUserAssociationComponent]
})
export class RoleUserAssociationModule { }
