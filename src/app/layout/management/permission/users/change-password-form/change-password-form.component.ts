import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  submitting: boolean = false;
  constructor(
    private dialog: MatDialogRef<ChangePasswordFormComponent>,
    private snackBar: MatSnackBar,
    private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitting = true;
    this.userService.changePassword(this.oldPassword, this.newPassword).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
      this.snackBar.open('密码修改成功', null, { duration: 2000 });
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;
      if (status === 400) {
        this.snackBar.open('原密码错误', null, { duration: 3000, extraClasses: ['warn'] });
      }
    });
  }

}
