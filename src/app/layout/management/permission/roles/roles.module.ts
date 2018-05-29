import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSortModule, MatSnackBarModule } from '@angular/material';
import { DialogModule, DateTimeModule, getPaginatorIntl, TableModule } from '../../../../shared/';
import { RoleUserAssociationModule } from './role-user-association/role-user-association.module';
import { RolesService } from './roles.service';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    DialogModule, DateTimeModule, TableModule,
    RoleUserAssociationModule,
    RolesRoutingModule
  ],
  declarations: [RolesComponent],
  providers: [{ provide: MatPaginatorIntl, useFactory: getPaginatorIntl }, RolesService]
})
export class RolesModule { }
