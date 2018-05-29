import { Injectable } from '@angular/core';

import { User } from '../../layout/management/permission/users/user';

@Injectable()
export class AuthService {
  authUrl = '/login';
  redirectUrl: string;

  currentUser: User;

  actions: { [key: string]: boolean } = {};

  constructor() {
  }

  getAuthToken() {
    if (/sid=([^;]+)/g.test(document.cookie)) {
      return decodeURIComponent(RegExp.$1);
    }
    return '';
  }

  getCurrentUser() {
    return this.currentUser;
  }

  check(actionName: string) {
    return this.actions[actionName];
  }


}
