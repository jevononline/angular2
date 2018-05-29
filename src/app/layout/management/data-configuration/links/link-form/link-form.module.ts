

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

import { LinkFormComponent } from './link-form.component';
import { LinksService } from '../links.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [LinkFormComponent],
  entryComponents: [LinkFormComponent],
  providers: [LinksService]
})
export class LinkFormModule { }
