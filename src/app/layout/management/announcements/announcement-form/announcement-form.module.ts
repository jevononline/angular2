import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { QuillModule } from 'ngx-quill';

import { AnnouncementFormRoutingModule } from './announcement-form-routing.module';
import { AnnouncementFormComponent } from './announcement-form.component';

import { DialogModule, APP_DATE_FORMATS } from '../../../../shared/';

import { AnnouncementsService } from '../announcements.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule,
    QuillModule,
    DialogModule,
    AnnouncementFormRoutingModule
  ],
  declarations: [AnnouncementFormComponent],
  providers: [
    AnnouncementsService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class AnnouncementFormModule { }
