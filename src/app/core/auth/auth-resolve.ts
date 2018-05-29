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

      this.authService.currentUser = user;
      this.authService.actions = { '/': true };
      actions.forEach(item => {
        this.authService.actions[item] = true;
      });

      return data;
    });
  }
}
