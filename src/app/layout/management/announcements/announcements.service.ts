import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Announcement } from './announcement';

@Injectable()
export class AnnouncementsService {

  constructor(private http: HttpClient) { }

  get(tableQuery: TableQuery, justLiving = false) {
    let url = justLiving ? '/api/announcing' : '/api/announcements';
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get<{ results: Announcement[], total: number }>(url, { params });
  }

  getOneById(id) {
    return this.http.get<Announcement>(`/api/announcements/${id}`).map(data => {
      data.startDate = moment(data.startDate).toDate();
      data.endDate = moment(data.endDate).toDate();
      return data;
    });
  }

  create(entity: Announcement) {
    return this.http.post('/api/announcements', {
      title: entity.title,
      startDate: moment(entity.startDate).format('YYYY-MM-DD'),
      endDate: moment(entity.endDate).format('YYYY-MM-DD'),
      content: entity.content,
      status: entity.status
    });
  }

  update(entity: Announcement) {
    return this.http.put(`/api/announcements/${entity.id}`, {
      title: entity.title,
      startDate: moment(entity.startDate).format('YYYY-MM-DD'),
      endDate: moment(entity.endDate).format('YYYY-MM-DD'),
      content: entity.content,
      status: entity.status
    });
  }

  delete(id) {
    return this.http.delete(`/api/announcements/${id}`);
  }
}
