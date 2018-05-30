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
		// if (/sid=([^;]+)/g.test(document.cookie)) {
		// 	return decodeURIComponent(RegExp.$1);
		// }
		return 'aiZsUzX4yh_L1Mu0cLA2v9Qb24iFbRfCDcHJVLsOg21BF9A0ePfAOk-R39ZsG1v3';
	}

	getCurrentUser() {
		return this.currentUser;
	}

	check(actionName: string) {
		return this.actions[actionName];
	}


}
