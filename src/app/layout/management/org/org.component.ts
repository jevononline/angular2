import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/auth/auth.service';
import { OrgService } from './org.service';
@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss']
})
export class OrgComponent implements OnInit {

  isReady = false;

  tabs = [];
  selectedTab: number = 0;

  constructor(public authService: AuthService, private orgService: OrgService) { }

  ngOnInit() {
    const tabConfigs = [
      { path: '/management/org@departments', name: '部门管理', value: 0 },
      { path: '/management/org@posts', name: '岗位管理', value: 1 },
      { path: '/management/org@staff', name: '人员管理', value: 2 }
    ];

    tabConfigs.forEach(item => {
      if (this.authService.actions[item.path]) {
        this.tabs.push(item);
      }
    });

    this.selectedTab = this.tabs[0].value;

  }

  selectTab(value) {
    this.selectedTab = value;
  }

  onActivate(event) {
    this.isReady = true;


    this.orgService.setDepartment(event.data);


  }

}

