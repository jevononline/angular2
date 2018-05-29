

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { StandardNetworkModule } from './standard-network/standard-network.module';
import { StandardCommitteeModule } from './standard-committee/standard-committee.module';

import { StandardSystemOrgManagementRoutingModule } from './standard-system-org-management-routing.module';
import { StandardSystemOrgManagementComponent } from './standard-system-org-management.component';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    StandardNetworkModule, StandardCommitteeModule,
    StandardSystemOrgManagementRoutingModule
  ],
  declarations: [StandardSystemOrgManagementComponent]
})
export class StandardSystemOrgManagementModule { }
