import { Component, OnInit, ViewChild, ElementRef, Input, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { AuthService } from '../../../../core/auth/auth.service';
import { MetadataService } from '../../../../core/metadata/metadata.service';
import { AnnouncementDetailComponent } from '../announcement-detail/announcement-detail.component';
import { ConfirmDialogComponent, TableDataSource } from '../../../../shared/';
import { AnnouncementsService } from '../announcements.service';
import { Announcement } from '../announcement';


@Component({
  selector: 'app-announcement-table',
  templateUrl: './announcement-table.component.html',
  styleUrls: ['./announcement-table.component.scss']
})
export class AnnouncementTableComponent implements OnInit {


  justLiving: boolean;

  @Input()
  mode: 'management' | 'view' = 'management';

  displayedColumns = [];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @Input()
  filter: Subject<string>;

  keyword: string;

  sortActive: string;


  dataSource: any;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    private authService: AuthService,
    private metadataService: MetadataService,
    private announcementsService: AnnouncementsService
  ) {
  }

  ngOnInit() {

    if (this.mode === 'management') {
      this.justLiving = false;
      this.sortActive = 'createdAt';
      this.displayedColumns = ['title', 'startDate', 'endDate', 'status', 'createdAt', 'createdBy', 'publishedAt', 'publishedBy'];
      if (
        this.authService.check('/management/announcements/:form/2/:id')
        ||
        this.authService.check('/management/announcements@delete')
      ) {
        this.displayedColumns.push('actions');
      }
    } else {
      this.justLiving = true;
      this.sortActive = 'startDate';
      this.displayedColumns = ['title', 'startDate', 'endDate'];
    }

    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.announcementsService.get({
          ...tableQuery,
          keyword: this.keyword
        }, this.justLiving);
      }
    }, this.paginator, this.sort);

    if (this.filter) {
      this.filter.subscribe((value) => {
        this.keyword = value;
        this.dataSource.refresh();
      });
    }
  }

  isEditable(row) {
    return row.status === this.metadataService.get('AnnouncementStatuses').Published.value;
  }

  openDetailDialog(id) {
    this.dialog.open(AnnouncementDetailComponent, { data: id });
  }

  publishAnnouncement(item) {

  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.title }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.announcementsService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.title}”已删除！`, null, {
            duration: 2000
          });
        });
      }
    });
  }

}
