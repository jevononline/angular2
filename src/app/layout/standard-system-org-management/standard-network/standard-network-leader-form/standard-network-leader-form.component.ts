import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { Department } from '../../../management/org/departments/department';
import { Staff } from '../../../management/org/staff/staff';
import { StandardNetworkService } from '../standard-network.service';

@Component({
  selector: 'app-standard-network-leader-form',
  templateUrl: './standard-network-leader-form.component.html',
  styleUrls: ['./standard-network-leader-form.component.scss']
})
export class StandardNetworkLeaderFormComponent implements OnInit {

  staff: Staff;

  submitting = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { department: Department, staff: Staff | null },
    private dialog: MatDialogRef<StandardNetworkLeaderFormComponent>,
    private snackBar: MatSnackBar,
    private standardNetworkService: StandardNetworkService
  ) { }

  ngOnInit() {
    this.staff = this.data.staff;
  }

  onSubmit() {
    this.submitting = true;

    this.standardNetworkService.setLeader(this.data.department.id, this.staff.id).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;

    });
  }

}
