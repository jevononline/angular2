import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


// import { StandardCommitteeRoutingModule } from './standard-committee-routing.module';
import { StandardCommitteeComponent } from './standard-committee.component';

import { StandardCommitteeService } from './standard-committee.service';

import { StandardCommitteeTreeviewModule } from './standard-committee-treeview/standard-committee-treeview.module';
import { StandardCommitteeTicketsModule } from './standard-committee-tickets/standard-committee-tickets.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    // StandardCommitteeRoutingModule,
    StandardCommitteeTreeviewModule,
    StandardCommitteeTicketsModule
  ],
  declarations: [StandardCommitteeComponent],
  exports: [StandardCommitteeComponent],
  providers: [StandardCommitteeService]
})
export class StandardCommitteeModule { }
