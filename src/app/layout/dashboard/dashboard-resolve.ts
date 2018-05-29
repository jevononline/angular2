import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';

import { StandardSystemService } from '../system-management/standard-system/standard-system.service';

@Injectable()
export class DashboardResolve implements Resolve<any>{

  constructor(private http: HttpClient, private standardSystemService: StandardSystemService) {

  }

  resolve() {
    return this.standardSystemService.getTree();
  }
}
