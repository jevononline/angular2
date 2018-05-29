import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Injectable()
export class TitleService {

  title: Observable<string>;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

    this.title = this.router.events
      .filter(event => event instanceof NavigationEnd)

      .map(() => this.route)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')

      .mergeMap(route => route.data)
      .map(data => data.title);


  }

}
