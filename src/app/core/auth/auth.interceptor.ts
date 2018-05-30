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
		const clone = request.clone({ headers: request.headers.set('X-Token', 'aiZsUzX4yh_L1Mu0cLA2v9Qb24iFbRfCDcHJVLsOg21BF9A0ePfAOk-R39ZsG1v3') })
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
