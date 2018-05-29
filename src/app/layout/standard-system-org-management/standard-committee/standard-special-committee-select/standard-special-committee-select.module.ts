import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { StandardSpecialCommitteeSelectComponent } from './standard-special-committee-select.component';
import { StandardCommitteeService } from '../standard-committee.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, MatSelectModule
  ],
  declarations: [StandardSpecialCommitteeSelectComponent],
  exports: [StandardSpecialCommitteeSelectComponent],
  providers: [StandardCommitteeService]
})
export class StandardSpecialCommitteeSelectModule { }
