import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { UserSelectComponent } from './user-select.component';

import { UsersService } from '../users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [UserSelectComponent],
  exports: [UserSelectComponent],
  providers: [UsersService]
})
export class UserSelectModule { }
