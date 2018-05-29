


import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-data-configuration',
  templateUrl: './data-configuration.component.html',
  styleUrls: ['./data-configuration.component.scss']
})
export class DataConfigurationComponent implements OnInit {

  isReady = false;

  tabs = [];
  selectedTab: number = 0;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    const tabConfigs = [
      { path: '/management/data-configuration@post-standard-associations', name: '岗位与标准设置', value: 0 },
      { path: '/management/data-configuration@links', name: '常用网站设置', value: 1 }
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

}

