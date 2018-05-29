import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { StandardCommittee } from '../standard-committee';
import { StandardCommitteeService } from '../standard-committee.service';

@Component({
  selector: 'app-standard-committee-form',
  templateUrl: './standard-committee-form.component.html',
  styleUrls: ['./standard-committee-form.component.scss']
})
export class StandardCommitteeFormComponent implements OnInit {

  model: StandardCommittee = new StandardCommittee();
  submitting: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'read' | 'create' | 'update', node: StandardCommittee },
    private dialog: MatDialogRef<StandardCommitteeFormComponent>,
    private snackBar: MatSnackBar,
    private standardCommitteeService: StandardCommitteeService
  ) {

  }

  ngOnInit() {
    if (this.data.action === 'update' || this.data.action === 'read') {
      this.standardCommitteeService.getOneById(this.data.node.id).subscribe((data) => {
        this.model = data;
      });
    } else if (this.data.action === 'create') {
      this.model.parent = this.data.node;
    }
  }


  onSubmit() {
    this.submitting = true;
    this.standardCommitteeService[this.data.action](this.model).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;


    });

  }

}
