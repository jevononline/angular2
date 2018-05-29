import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Announcement } from '../announcement';
import { AnnouncementsService } from '../announcements.service';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.scss']
})
export class AnnouncementDetailComponent implements OnInit {

  model = new Announcement();
  constructor( @Inject(MAT_DIALOG_DATA) public data: string | number, private announcementsService: AnnouncementsService) { }

  ngOnInit() {
    this.announcementsService.getOneById(this.data).subscribe((data) => {
      this.model = data;
    });
  }

}
