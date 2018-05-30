import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';

import { User } from '../../layout/management/permission/users/user';

import { AuthService } from './auth.service';

@Injectable()
export class AuthResolve implements Resolve<any>{

	constructor(private http: HttpClient, private authService: AuthService) {

	}

	resolve() {
		return Observable.forkJoin(this.http.get<User>('/api/users/current'), this.http.get<string[]>('/api/actions')).map(data => {
			let [user, actions] = data;

			// ceshi
			actions = [
				"/system-management",
				"/standard-management",
				"/announcing",
				"/guidelines",
				"/superior-documents",
				"/regulations",
				"/regulations",
				"/standard-system-org-management",
				"/process-management",
				"/process-management/processes",
				"/process-management/processes",
				"/process-management/tasks",
				"/management",
				"/process-management/work-plan",
				"/standard-system-org-management",
				"/management/announcements",
				"/guidelines",
				"/management/data-configuration",
				"/evaluations",
				"/evaluations/self",
				"/evaluations/audits",
				"/cost-management",
				"/training",
				"/training/study",
				"/standard-analytics",
				"/online-editing",
				"/management",
				"/management/org",
				"/management/permission/users",
				"/management/permission/roles",
				"/management/permission",
				"/management/data-configuration",
				"/management/process-configuration",
				"/process-management/tasks"
			];

			this.authService.currentUser = user;
			this.authService.actions = { '/': true };
			actions.forEach(item => {
				this.authService.actions[item] = true;
			});

			return data;
		});
	}
}
