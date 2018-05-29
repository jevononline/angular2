import { NgModule, Optional, SkipSelf, InjectionToken, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { MD_ERROR_GLOBAL_OPTIONS, showOnDirtyErrorStateMatcher } from '@angular/material';

import { APP_CONFIG, APP_CONFIG_VALUE } from './app-config';
import { MetadataResolve } from '../core/metadata/metadata-resolve';
import { MetadataService } from './metadata/metadata.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthResolve } from './auth/auth-resolve';
import { AuthService } from './auth/auth.service';
import { TitleService } from './title/title.service';
import { TreeviewService } from './treeview/treeview.service';

registerLocaleData(localeZh);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-CN' },

    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
    // { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: showOnDirtyErrorStateMatcher } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MetadataResolve, MetadataService, AuthGuardService, AuthResolve, AuthService, TitleService,
    TreeviewService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}


