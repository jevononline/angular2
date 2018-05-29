import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { Department } from '../department';
import { Post } from '../../posts/post';
import { Staff } from '../../staff/staff';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-leader-form',
  templateUrl: './department-leader-form.component.html',
  styleUrls: ['./department-leader-form.component.scss']
})
export class DepartmentLeaderFormComponent implements OnInit {

  staff: Staff;
  submitting: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { department: Department, staff: Staff },
    private dialog: MatDialogRef<DepartmentLeaderFormComponent>,
    private snackBar: MatSnackBar,
    private departmentsService: DepartmentsService
  ) {
    if (this.data.staff) {
      this.staff = this.data.staff;
    }
  }

  ngOnInit() {

  }


  onSubmit() {
    this.submitting = true;
    this.departmentsService.setLeader(this.data.department.id, this.staff.id).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;


    });

  }

}

