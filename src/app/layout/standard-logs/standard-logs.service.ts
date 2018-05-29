import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class StandardLogsService {

  constructor(private http: HttpClient) { }

  log(id: number, event: number) {
    return this.http.get(`/api/standard-logs/standard/${id}/event/${event}`);
  }
}
