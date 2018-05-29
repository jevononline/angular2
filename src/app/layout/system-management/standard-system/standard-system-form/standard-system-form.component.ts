import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { StandardSystem } from '../standard-system';
import { StandardSystemService } from '../standard-system.service';

@Component({
  selector: 'app-standard-system-form',
  templateUrl: './standard-system-form.component.html',
  styleUrls: ['./standard-system-form.component.scss']
})
export class StandardSystemFormComponent implements OnInit {

  hasStandardCommittee = false;
  model: StandardSystem = new StandardSystem();
  submitting: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'read' | 'create' | 'update', node: StandardSystem },
    private dialog: MatDialogRef<StandardSystemFormComponent>,
    private snackBar: MatSnackBar,
    private standardSystemService: StandardSystemService
  ) {

  }

  ngOnInit() {
    if (this.data.action === 'update' || this.data.action === 'read') {

      this.hasStandardCommittee = this.data.node.level === 2;
      this.model.id = this.data.node.id;
      this.standardSystemService.getOneById(this.data.node.id).subscribe((data) => {
        this.model = data;
      });
    } else if (this.data.action === 'create') {

      this.hasStandardCommittee = this.data.node && this.data.node.level === 1;
      this.model.id = 0;
      this.model.parent = this.data.node;
    }
  }


  onSubmit() {
    this.submitting = true;
    this.standardSystemService[this.data.action](this.model).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;

    });

  }

}
