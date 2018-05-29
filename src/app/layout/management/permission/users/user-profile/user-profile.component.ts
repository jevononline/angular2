import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { User } from '../user';
import { AuthService } from '../../../../../core/auth/auth.service';
import { UsersService } from '../users.service';
import { ChangePasswordFormComponent } from '../change-password-form/change-password-form.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router, private dialog: MatDialog, private authService: AuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  openChangePasswordDialog() {
    this.dialog.open(ChangePasswordFormComponent, { width: '500px' });
  }

  logout() {
    this.usersService.logout().subscribe(() => {
      this.router.navigateByUrl(this.authService.authUrl);
    });
  }

}
