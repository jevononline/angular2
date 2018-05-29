import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule, MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { QuillModule } from 'ngx-quill';

import { APP_DATE_FORMATS } from '../../../../shared/';

import { AnnouncementDetailComponent } from './announcement-detail.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, FlexLayoutModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule,
    QuillModule
  ],
  declarations: [AnnouncementDetailComponent],
  entryComponents: [AnnouncementDetailComponent],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ]
})
export class AnnouncementDetailModule { }
