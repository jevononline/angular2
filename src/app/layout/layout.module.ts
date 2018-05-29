import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';

import { CollapseModule, AccordionModule } from '../shared/';

import { UserProfileModule } from './management/permission/users/user-profile/user-profile.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule,
    CollapseModule, AccordionModule, UserProfileModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent],
  providers: []
})
export class LayoutModule { }
