import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';


import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { AuthService } from '../../../../core/auth/auth.service';
import { ConfirmDialogComponent, TableDataSource } from '../../../../shared/';
import { RoleUserAssociationComponent } from './role-user-association/role-user-association.component';
import { RolesService } from './roles.service';
import { Role } from './role';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<Role>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private rolesService: RolesService
  ) {

  }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'createdBy', 'createdAt', 'actions'];
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.rolesService.get({ ...tableQuery, keyword: this.keyword.nativeElement.value });
      }
    }, this.paginator, this.sort);

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });
  }

  openUserAssociationDialog(item) {
    let dialogRef = this.dialog.open(RoleUserAssociationComponent, {
      data: item.id,
      width: '750px'
    });

  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.name }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.rolesService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.name}”已删除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          let { status } = errorResponse;
          if (status === 423) {
            this.snackBar.open(`删除“${item.name}”失败，有用户已关联该角色`, null, { duration: 3000, extraClasses: ['warn'] });
          }
        });
      }
    });
  }
}

