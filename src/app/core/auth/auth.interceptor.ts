import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = request.clone({ headers: request.headers.set('X-Token', this.authService.getAuthToken()) })
    return next.handle(clone).do(event => {


    }, event => {

      if (event instanceof HttpErrorResponse) {

        if (event.status === 401) {
          this.router.navigateByUrl(this.authService.authUrl);
        } else if (event.status === 403) {

        }
      }
    });
  }
}