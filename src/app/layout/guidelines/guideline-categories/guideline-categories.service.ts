import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GuidelineCategory } from './guideline-category';

@Injectable()
export class GuidelineCategoriesService {

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
    return this.http.get<{ results: GuidelineCategory[], total: number }>(`/api/guideline-categories`, { params });
  }

  getOneById(id) {
    return this.http.get<GuidelineCategory>(`/api/guideline-categories/${id}`);
  }


  create(entity: GuidelineCategory) {
    return this.http.post<GuidelineCategory>('/api/guideline-categories', {
      name: entity.name
    });
  }

  update(entity: GuidelineCategory) {
    return this.http.put(`/api/guideline-categories/${entity.id}`, {
      name: entity.name
    });
  }

  delete(id) {
    return this.http.delete(`/api/guideline-categories/${id}`);
  }
}
