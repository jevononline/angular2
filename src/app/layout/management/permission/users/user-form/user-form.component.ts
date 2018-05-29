import { Component, ViewChild, ElementRef, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { Department } from '../../../org/departments/department';
import { Post } from '../../../org/posts/post';
import { Staff } from '../../../org/staff/staff';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  action = null;

  model = new User();
  submitting = false;

  hasLinkedStaff = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private usersService: UsersService
  ) {
    this.action = this.route.parent.snapshot.params.form;
  }

  ngOnInit() {
    if (this.action === 'update') {
      let id = this.route.snapshot.params.id;
      this.model.id = id;
      this.usersService.getOneById(id).subscribe((data) => {
        if (data.staff) {
          this.hasLinkedStaff = true;
        }
        this.model = data;
      });
    } else {
      this.model.id = 0;
    }
  }

  onSubmit() {
    this.submitting = true;
    this.usersService[this.action](this.model).subscribe(() => {
      this.router.navigateByUrl('/management/permission/users');
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;
      if (status === 409) {
        let { code } = errorResponse.error;
        if (code === 902) {
          this.snackBar.open(`${this.model.staff.fullName}已有用户！`, null, {
            duration: 3000,
            extraClasses: ['warn']
          });
        }
      }
    });
  }

}

