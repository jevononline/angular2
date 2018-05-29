import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

import { StandardSystem } from '../system-management/standard-system/standard-system';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedTabX = 0;
  selectedTabY = 0;

  standardSystems: StandardSystem[];

  constructor(private route: ActivatedRoute, public authService: AuthService) {
    this.standardSystems = this.route.snapshot.data.standardSystems;
  }

  ngOnInit() {
  }

}
