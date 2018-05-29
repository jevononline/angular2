import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { SystemOrgTicket } from '../../../system-orgs/system-org-tickets/system-org-ticket';

@Injectable()
export class StandardCommitteeTicketsService {

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

    return this.http.get<{ results: SystemOrgTicket[], total: number }>(`/api/system-orgs/${systemOrgId}/standard-committee-tickets`, { params });
  }

  create(systemOrgTicket: SystemOrgTicket) {
    return this.http.post(`/api/standard-committee-tickets`, {
      systemOrgId: systemOrgTicket.systemOrgId,
      staff: systemOrgTicket.staff,
      content: systemOrgTicket.content
    });
  }

  update(systemOrgTicket: SystemOrgTicket) {
    return this.http.put(`/api/standard-committee-tickets/${systemOrgTicket.id}`, {
      systemOrgId: systemOrgTicket.systemOrgId,
      staff: systemOrgTicket.staff,
      content: systemOrgTicket.content
    });
  }

  delete(systemOrgId: number, id: number) {
    return this.http.delete(`/api/system-orgs/${systemOrgId}/standard-committee-tickets/${id}`);
  }
}
