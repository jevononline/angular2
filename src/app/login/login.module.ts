import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';

import { GuidelineLatestModule } from '../layout/guidelines/guideline-latest/guideline-latest.module';

import { LoginService } from './login.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule, FormsModule,
    MatCardModule, MatIconModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule,
    GuidelineLatestModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
