import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Guideline } from './guideline';

@Injectable()
export class GuidelinesService {

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
    return this.http.get<TableResult<Guideline>>('/api/guidelines', { params });
  }

  getOneById(id) {
    return this.http.get<Guideline>(`/api/guidelines/${id}`);
  }

  getCategoryRank(categoryId: number, rank: number) {
    return this.http.get<Guideline[]>(`/api/guidelines/${categoryId}/${rank}`);
  }

  getLatestGuideline() {
    return this.http.get<Guideline>(`/api/guidelines/latest/guideline`);
  }

  create(entity: Guideline) {
    return this.http.post('/api/guidelines', {
      title: entity.title,
      timeSpan: entity.timeSpan,
      category: { id: entity.category.id },
      content: entity.content
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/guidelines/import', file);
  }

  update(entity: Guideline) {
    return this.http.put(`/api/guidelines/${entity.id}`, {
      title: entity.title,
      timeSpan: entity.timeSpan,
      category: { id: entity.category.id },
      content: entity.content
    });
  }

  delete(id) {
    return this.http.delete(`/api/guidelines/${id}`);
  }
}
