import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  newPassword: string;
  confrimNewPassword: string;
  submitting: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialog: MatDialogRef<ResetPasswordFormComponent>,
    private snackBar: MatSnackBar,
    private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitting = true;
    this.userService.resetPassword(this.data.id, this.newPassword).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
      this.snackBar.open('密码重置成功', null, { duration: 2000 });
    }, () => {
      this.submitting = false;
    });
  }

}
