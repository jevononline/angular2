import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostManagementRoutingModule } from './cost-management-routing.module';
import { CostManagementComponent } from './cost-management.component';

@NgModule({
  imports: [
    CommonModule,
    CostManagementRoutingModule
  ],
  declarations: [CostManagementComponent]
})
export class CostManagementModule { }
