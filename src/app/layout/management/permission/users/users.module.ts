import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatInputModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

import { UserTableModule } from './user-table/user-table.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatButtonModule, MatInputModule, MatDialogModule, MatSnackBarModule,
    UserTableModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
