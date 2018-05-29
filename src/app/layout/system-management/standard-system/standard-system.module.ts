import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { StandardSystemTreeviewModule } from './standard-system-treeview/standard-system-treeview.module';
import { StandardSystemTableModule } from './standard-system-table/standard-system-table.module';
import { StandardSystemRoutingModule } from './standard-system-routing.module';
import { StandardSystemComponent } from './standard-system.component';
import { StandardSystemService } from './standard-system.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatButtonModule, MatInputModule,
    StandardSystemTreeviewModule, StandardSystemTableModule,
    StandardSystemRoutingModule
  ],
  declarations: [StandardSystemComponent],
  providers: [StandardSystemService]
})
export class StandardSystemModule { }
