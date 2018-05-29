import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-standard-system-org-management',
  templateUrl: './standard-system-org-management.component.html',
  styleUrls: ['./standard-system-org-management.component.scss']
})
export class StandardSystemOrgManagementComponent implements OnInit {
  selectedTab: number;
  tabs = [];
  constructor(public authService: AuthService) { }

  ngOnInit() {


    const tabConfigs = [
      { path: '/standard-system-org-management@standard-committee', name: '标委会组织', value: 0 },
      { path: '/standard-system-org-management@standard-network', name: '网络组织', value: 1 }
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
