import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { AuthService } from '../../../../core/auth/auth.service';
import { ImportDialogComponent } from '../../../../shared/'

import { UserTableComponent } from './user-table/user-table.component';

import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('keyword')
  keyword: ElementRef;

  @ViewChild('dataTable')
  dataTable: UserTableComponent;

  filter = new Subject<string>();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, public authService: AuthService, private usersService: UsersService) {

  }

  ngOnInit() {
    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '用户模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+eUqOaIt+aooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.import(result).subscribe(() => {
          this.dataTable.dataSource.refresh();
          this.snackBar.open('导入成功', null, { duration: 3000 });
        }, () => {
          this.snackBar.open('导入失败', null, { duration: 3000, extraClasses: ['warn'] });
        });
      }
    });
  }

}

