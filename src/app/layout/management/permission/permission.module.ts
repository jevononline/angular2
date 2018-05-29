import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './permission.component';

@NgModule({
  imports: [
    CommonModule,
    PermissionRoutingModule
  ],
  declarations: [PermissionComponent]
})
export class PermissionModule { }
