import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../core/auth/auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  submitting = false;
  loginId: string;
  password: string;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    if (this.form.valid && !this.submitting) {
      this.submitting = true;
      this.loginService.login({ loginId: this.loginId, password: this.password })
        .subscribe(() => {
          this.router.navigateByUrl(this.authService.redirectUrl || '/');
        }, (errorResponse: HttpErrorResponse) => {
          this.submitting = false;
          let { status } = errorResponse;
          let msg = '';
          if (status === 400) {
            msg = '登录名或密码错误';
          } else if (status === 423) {
            let { code } = errorResponse.error;
            if (code === 801) {
              msg = '登录失败，账号被锁定';
            } else if (code === 802) {
              msg = '登录失败，员工已离职'
            }
          } else {
            msg = '系统异常，请稍后重试';
          }
          this.snackBar.open(msg, null, { duration: 3000, extraClasses: ['warn'] });
        });
    }
  }

}
