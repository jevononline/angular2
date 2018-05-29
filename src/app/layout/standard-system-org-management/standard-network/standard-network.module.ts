import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


// import { StandardNetworkRoutingModule } from './standard-network-routing.module';

import { StandardNetworkComponent } from './standard-network.component';
import { StandardNetworkService } from './standard-network.service';
import { StandardNetworkTreeviewModule } from './standard-network-treeview/standard-network-treeview.module';

import { StandardNetworkTicketsModule } from './standard-network-tickets/standard-network-tickets.module';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    // StandardNetworkRoutingModule,
    StandardNetworkTreeviewModule, StandardNetworkTicketsModule
  ],
  declarations: [StandardNetworkComponent],
  exports: [StandardNetworkComponent],
  providers: [StandardNetworkService]
})
export class StandardNetworkModule { }
