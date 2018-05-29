import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { UploadModule, TimeSpanSelectModule, TimeSpanValidatorModule, DocumentNoValidatorModule, APP_DATE_FORMATS } from '../../../shared/';

import { SuperiorDocumentFormRoutingModule } from './superior-document-form-routing.module';
import { SuperiorDocumentFormComponent } from './superior-document-form.component';

import { SuperiorDocumentsService } from '../superior-documents.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatNativeDateModule, MatDatepickerModule,
    UploadModule, TimeSpanSelectModule, TimeSpanValidatorModule, DocumentNoValidatorModule,
    SuperiorDocumentFormRoutingModule
  ],
  declarations: [SuperiorDocumentFormComponent],
  providers: [
    SuperiorDocumentsService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class SuperiorDocumentFormModule { }

