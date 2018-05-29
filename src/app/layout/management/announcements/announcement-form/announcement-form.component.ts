import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MetadataService } from '../../../../core/metadata/metadata.service';
import { ErrorDialogComponent, ConfirmDialogComponent } from '../../../../shared/';
import { Announcement } from '../announcement';
import { AnnouncementsService } from '../announcements.service';



@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent implements OnInit {

  action = null;
  model = new Announcement();
  submitting = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private metadataService: MetadataService,
    private announcementsService: AnnouncementsService) {
    this.action = this.route.parent.snapshot.params.form;
  }

  ngOnInit() {
    if (this.action === 'update') {
      this.announcementsService.getOneById(this.route.snapshot.params.id).subscribe((data) => {
        this.model = data;
      });
    }
  }

  openPublishDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'publishAnnouncement' }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.publish();
      }
    });
  }

  publish() {
    this.model.status = this.metadataService.get('AnnouncementStatuses').Published.value;
    this.submit();
  }

  onSubmit() {
    this.model.status = this.metadataService.get('AnnouncementStatuses').Draft.value;
    this.submit();
  }

  submit() {
    this.submitting = true;
    this.announcementsService[this.action](this.model).subscribe(() => {
      this.router.navigate(['/management/announcements']);
    }, error => {
      this.submitting = false;
      // 公告内容过大
      let { status } = error;
      if (status === 413) {
        this.dialog.open(ErrorDialogComponent, { data: { id: 'announcements.create.413' } });
      }
    });
  }

}
