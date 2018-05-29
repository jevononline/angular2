import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { SystemOrgTicket } from '../../../system-orgs/system-org-tickets/system-org-ticket';


@Injectable()
export class StandardNetworkTicketsService {

  constructor(private http: HttpClient) { }

  /** orgId 对于standard network组织，即department id */
  get(systemOrgId: number, tableQuery?: TableQuery) {

    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }

    return this.http.get<{ results: SystemOrgTicket[], total: number }>(`/api/system-orgs/${systemOrgId}/standard-network-tickets`, { params });
  }

  createMany(systemOrgTickets: SystemOrgTicket[]) {
    return this.http.post(`/api/standard-network-tickets`, systemOrgTickets);
  }

  delete(systemOrgId: number, id: number) {
    return this.http.delete(`/api/system-orgs/${systemOrgId}/standard-network-tickets/${id}`);
  }

}
