import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { SystemOrgTicket } from './system-org-ticket';


@Injectable()
export class SystemOrgTicketsService {

  constructor(private http: HttpClient) { }

  getOneById(id) {
    return this.http.get<SystemOrgTicket>(`/api/system-org-tickets/${id}`);
  }

  delete(id) {
    return this.http.delete(`/api/system-org-tickets/${id}`);
  }
}
