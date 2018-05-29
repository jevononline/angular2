import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Process } from './process';

@Injectable()
export class ProcessesService {

  constructor(private http: HttpClient) { }

  get(tableQuery: TableQuery) {
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get<{ results: Process[], total: number }>('/api/plans', { params });
  }

  getOneById(id) {
    return this.http.get<Process>(`/api/plans/${id}`).map(result => {
      if (result.data) {
        result.data.departmentReviewTime = moment(result.data.departmentReviewTime).toDate();
        result.data.expertCommitteeReviewTime = moment(result.data.expertCommitteeReviewTime).toDate();
        result.data.standardCommitteeReviewTime = moment(result.data.standardCommitteeReviewTime).toDate();
      }
      return result;
    });
  }

  getDiagram(id) {

    return this.http.get(`/api/processes/${id}/diagram`, { responseType: 'blob' });
  }

  create(entity: Process) {
    return this.http.post('/api/plans', {
      name: entity.name,
      type: entity.type
    });
  }

  setSettings(id, data: any) {
    return this.http.patch(`/api/plans/${id}/settings`, { data });
  }

  update(entity: Process) {
    return this.http.put(`/api/plans/${entity.id}`, {
      name: entity.name,
      type: entity.type
    });
  }

  delete(id) {
    return this.http.delete(`/api/plans/${id}`);
  }

  getDetail (processInstanceId) {
    return this.http.get(`/api/processes/${processInstanceId}/activity`);
  }
}
