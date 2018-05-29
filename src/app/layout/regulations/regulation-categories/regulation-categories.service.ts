

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RegulationCategory } from './regulation-category';

@Injectable()
export class RegulationCategoriesService {

  constructor(private http: HttpClient) { }

  get(tableQuery?: TableQuery) {
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get<{ results: RegulationCategory[], total: number }>(`/api/regulation-categories`, { params });
  }

  getOneById(id) {
    return this.http.get<RegulationCategory>(`/api/regulation-categories/${id}`);
  }


  create(entity: RegulationCategory) {
    return this.http.post<RegulationCategory>('/api/regulation-categories', {
      name: entity.name
    });
  }

  update(entity: RegulationCategory) {
    return this.http.put(`/api/regulation-categories/${entity.id}`, {
      name: entity.name
    });
  }

  delete(id) {
    return this.http.delete(`/api/regulation-categories/${id}`);
  }
}
