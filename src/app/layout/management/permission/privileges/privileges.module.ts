import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { UploadModule } from '../../../../shared/';

import { PrivilegesService } from './privileges.service';
import { PrivilegesRoutingModule } from './privileges-routing.module';
import { PrivilegesComponent } from './privileges.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule, MatIconModule, MatSnackBarModule,
    UploadModule,
    PrivilegesRoutingModule
  ],
  declarations: [PrivilegesComponent],
  providers: [PrivilegesService]
})
export class PrivilegesModule { }
