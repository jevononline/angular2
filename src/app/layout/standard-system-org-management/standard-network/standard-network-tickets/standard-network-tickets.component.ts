import { Component, OnInit, ViewChild, ElementRef, Input, Inject, Optional } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';


import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { ConfirmDialogComponent, TableDataSource } from '../../../../shared/';
import { AuthService } from '../../../../core/auth/auth.service';
import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { StandardNetworkTicketFormComponent } from './standard-network-ticket-form/standard-network-ticket-form.component';
import { StandardNetworkService } from '../standard-network.service';
import { StandardNetworkTicketsService } from './standard-network-tickets.service';
import { SystemOrgTicket } from '../../../system-orgs/system-org-tickets/system-org-ticket';
import { SystemOrgTicketsService } from '../../../system-orgs/system-org-tickets/system-org-tickets.service';

// import { Department } from '../../../management/org/departments/department';
import { Post } from '../../../management/org/posts/post';

@Component({
  selector: 'app-standard-network-tickets',
  templateUrl: './standard-network-tickets.component.html',
  styleUrls: ['./standard-network-tickets.component.scss']
})
export class StandardNetworkTicketsComponent implements OnInit {

  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<SystemOrgTicket>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    @Optional() private treeviewService: TreeviewService,
    public standardNetworkService: StandardNetworkService,
    public systemOrgTicketsService: SystemOrgTicketsService,
    public standardNetworkTicketsService: StandardNetworkTicketsService
  ) {

  }

  ngOnInit() {

    this.displayedColumns = ['staffNo', 'fullName', 'status', 'posts', 'loginId', 'userStatus', 'createdAt'];

    if (
      this.authService.check('/standard-system-org-management@standard-network@add-staff')
    ) {
      this.displayedColumns.push('actions');
    }
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.standardNetworkTicketsService.get(
          this.standardNetworkService.department.id,
          { ...tableQuery, keyword: this.keyword.nativeElement.value }
        );
      }
    }, this.paginator, this.sort);

    this.standardNetworkService.departmentChange.subscribe((data) => {
      this.dataSource.refresh();
    });

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });

  }

  displayPosts(posts: Post[]) {
    let results = [];
    posts.forEach(post => {
      results.push(post.name);
    });
    return results.join(',');
  }

  openFormDialog(node) {
    let dialogRef = this.dialog.open(StandardNetworkTicketFormComponent, {
      data: node,
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.refresh();
        if (this.treeviewService) {
          this.treeviewService.refresh();
        }
      }
    });
  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'remove', content: item.staff.fullName }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.standardNetworkTicketsService.delete(this.standardNetworkService.department.id, item.id).subscribe(() => {
          this.dataSource.refresh();
          if (this.treeviewService) {
            this.treeviewService.refresh();
          }
          this.snackBar.open(`“${item.staff.fullName}”已移除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          let { status } = errorResponse;
          if (status === 423) {
            let { code, errorData } = errorResponse.error;
            if (code === 902) {
              this.snackBar.open(`删除失败，“${item.staff.fullName}”是“${errorData.department.name}”的负责人！`, null, {
                duration: 3000,
                extraClasses: ['warn']
              })
            }
          }
        });
      }
    });
  }

}


