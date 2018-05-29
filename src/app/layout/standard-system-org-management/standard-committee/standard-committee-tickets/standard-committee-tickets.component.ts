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
import { StandardCommitteeTicketFormComponent } from './standard-committee-ticket-form/standard-committee-ticket-form.component';
import { StandardCommitteeService } from '../standard-committee.service';
import { StandardCommitteeTicketsService } from './standard-committee-tickets.service';
import { SystemOrgTicket } from '../../../system-orgs/system-org-tickets/system-org-ticket';
import { SystemOrgTicketsService } from '../../../system-orgs/system-org-tickets/system-org-tickets.service';

// import { Department } from '../../../management/org/departments/department';
import { Post } from '../../../management/org/posts/post';

@Component({
  selector: 'app-standard-committee-tickets',
  templateUrl: './standard-committee-tickets.component.html',
  styleUrls: ['./standard-committee-tickets.component.scss']
})
export class StandardCommitteeTicketsComponent implements OnInit {

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
    public standardCommitteeService: StandardCommitteeService,
    public standardCommitteeTicketsService: StandardCommitteeTicketsService
  ) {

  }

  ngOnInit() {

    this.displayedColumns = ['staffNo', 'fullName', 'position', 'duties', 'createdAt'];
    if (
      this.authService.check('/standard-system-org-management@standard-committee@update-staff')
      ||
      this.authService.check('/standard-system-org-management@standard-committee@remove-staff')
    ) {
      this.displayedColumns.push('actions');
    }
    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.standardCommitteeTicketsService.get(
          this.standardCommitteeService.standardCommittee.id,
          { ...tableQuery, keyword: this.keyword.nativeElement.value }
        );
      }
    }, this.paginator, this.sort);

    this.standardCommitteeService.standardCommitteeChange.subscribe((data) => {
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

  openFormDialog(data) {
    let dialogRef = this.dialog.open(StandardCommitteeTicketFormComponent, {
      data,
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
        this.standardCommitteeTicketsService.delete(this.standardCommitteeService.standardCommittee.id, item.id).subscribe(() => {
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
              this.snackBar.open(`删除失败，“${item.staff.fullName}”是“${errorData.name}”的负责人！`, null, {
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

