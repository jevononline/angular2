
import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, ViewChild, ElementRef, Input, Inject } from '@angular/core';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../../../../../core/app-config';
import { AuthService } from '../../../../../core/auth/auth.service';
import { ConfirmDialogComponent, TableDataSource } from '../../../../../shared/';
import { ResetPasswordFormComponent } from '../reset-password-form/reset-password-form.component';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Role } from '../../roles/role';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  selection = new SelectionModel<number>(true, []);

  displayedColumns = [];

  @Input()
  mode: 'management' | 'view' = 'management';

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @Input()
  filter: Subject<string>;

  keyword: string;

  @Input()
  roleId: number;

  dataSource: TableDataSource<User>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private usersService: UsersService
  ) {

  }

  ngOnInit() {
    if (this.mode === 'management') {
      this.displayedColumns = ['id', 'loginId', 'status', 'staff', 'createdAt', 'actions'];
    } else {
      this.displayedColumns = ['id', 'loginId', 'status', 'staff'];
    }


    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.usersService.get({ ...tableQuery, keyword: this.keyword, roleId: this.roleId });
      }
    }, this.paginator, this.sort);

    if (this.filter) {
      this.filter.subscribe((value) => {
        this.keyword = value;
        this.dataSource.refresh();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.roleId && !changes.roleId.firstChange) {
      this.dataSource.refresh();
    }
  }

  displayRoles(roles: Role[]) {

    return '关联角色：' + (roles.length > 0 ? roles.map(item => item.name).join(',') : '无');
  }

  openResetPasswordDialog(item) {
    let dialogRef = this.dialog.open(ResetPasswordFormComponent, {
      data: item
    });
  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.title }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.title}”已删除！`, null, {
            duration: 2000
          });
        });
      }
    });
  }

  isAllSelected(): boolean {
    if (!this.dataSource) { return false; }
    if (this.selection.isEmpty()) { return false; }

    return this.selection.selected.length == this.dataSource.total;

  }

  allToggle() {
    if (!this.dataSource) { return; }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
    }
  }
}

