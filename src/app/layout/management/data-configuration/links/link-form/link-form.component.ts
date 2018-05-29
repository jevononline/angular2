import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { Link } from '../link';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss']
})
export class LinkFormComponent implements OnInit {

  model: Link = new Link();
  submitting: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'read' | 'create' | 'update', node: Link },
    private dialog: MatDialogRef<LinkFormComponent>,
    private linksService: LinksService
  ) {

  }

  ngOnInit() {
    if (this.data.action === 'update' || this.data.action === 'read') {
      this.linksService.getOneById(this.data.node.id).subscribe((data) => {
        this.model = data;
      });
    }
  }


  onSubmit() {
    this.submitting = true;
    this.linksService[this.data.action](this.model).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;

    });

  }

}
