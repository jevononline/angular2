import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService.redirectUrl = state.url;
    if (this.authService.getAuthToken()) {
      // let r = route.root;
      // let ps = [];
      // while (r) {
      //   if (r.routeConfig && r.routeConfig.path) {
      //     ps.push(r.routeConfig.path);
      //   }
      //   if (r.children && r.children.length > 0) {
      //     let ars: ActivatedRouteSnapshot[] = r.children.filter(z => z.outlet === 'primary');
      //     r = ars[0];
      //   } else {
      //     r = null;
      //   }
      // }
      // console.log(ps.join('/'));
      return true;
    } else {
      this.router.navigate([this.authService.authUrl]);
      return false;
    }
  }



}
