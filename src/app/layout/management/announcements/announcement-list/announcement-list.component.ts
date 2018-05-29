import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AnnouncementDetailComponent } from '../announcement-detail/announcement-detail.component';
import { AnnouncementsService } from '../announcements.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {

  isReady = false
  list: Announcement[] = [];
  constructor(private dialog: MatDialog, private announcementsService: AnnouncementsService) { }

  ngOnInit() {
    this.announcementsService.get({ page: 1, limit: 5 }, true).subscribe(data => {
      this.isReady = true;
      this.list = data.results;
    });
  }

  openDetailDialog(id) {
    this.dialog.open(AnnouncementDetailComponent, { data: id });
  }

}
