import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { StandardCommittee } from '../standard-committee';
import { Staff } from '../../../management/org/staff/staff';
import { StandardCommitteeService } from '../standard-committee.service';

@Component({
  selector: 'app-standard-committee-leader-form',
  templateUrl: './standard-committee-leader-form.component.html',
  styleUrls: ['./standard-committee-leader-form.component.scss']
})
export class StandardCommitteeLeaderFormComponent implements OnInit {

  staff: Staff;

  submitting = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { standardCommittee: StandardCommittee, staff: Staff | null },
    private dialog: MatDialogRef<StandardCommitteeLeaderFormComponent>,
    private snackBar: MatSnackBar,
    private standardCommitteeService: StandardCommitteeService
  ) { }

  ngOnInit() {
    this.staff = this.data.staff;
  }

  onSubmit() {
    this.submitting = true;

    this.standardCommitteeService.setLeader(this.data.standardCommittee.id, this.staff.id).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
    });
  }

}
