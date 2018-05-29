import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule, MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { APP_DATE_FORMATS } from '../../../../shared/';
import { ProcessSettingsComponent } from './process-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ],
  declarations: [ProcessSettingsComponent],
  entryComponents: [ProcessSettingsComponent],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class ProcessSettingsModule { }
