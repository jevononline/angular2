import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatIconModule } from '@angular/material';

//todo
import { ngMock } from 'angular-mocks/ngMock';


import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatDialogModule, MatIconModule,
		CoreModule,
		ngMock,
		AppRoutingModule

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
