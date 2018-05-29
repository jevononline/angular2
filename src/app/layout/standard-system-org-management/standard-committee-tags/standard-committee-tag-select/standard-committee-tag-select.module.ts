import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { StandardCommitteeTagSelectComponent } from './standard-committee-tag-select.component';

import { StandardCommitteeTagsService } from '../standard-committee-tags.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [StandardCommitteeTagSelectComponent],
  exports: [StandardCommitteeTagSelectComponent],
  providers: [StandardCommitteeTagsService]
})
export class StandardCommitteeTagSelectModule { }
