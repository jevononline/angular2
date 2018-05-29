import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { MatSidenav } from '@angular/material';
import { AuthService } from '../core/auth/auth.service';
import { TitleService } from '../core/title/title.service';
import { Staff } from './management/org/staff/staff';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  title = '';
  url = '';
  userInfo : Staff;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(private router: Router, public authService: AuthService, private titleService: TitleService) {



    this.titleService.title.subscribe(title => {
      this.title = title;
    });

    this.userInfo = this.authService.currentUser.staff;

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.url = this.router.url;
      });

  }

  ngOnInit() {

  }

}
