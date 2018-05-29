import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Link } from './link';

@Injectable()
export class LinksService {

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
    return this.http.get<TableResult<Link>>('/api/links', { params });
  }

  getOneById(id) {
    return this.http.get<Link>(`/api/links/${id}`);
  }

  create(entity: Link) {
    return this.http.post('/api/links', {
      name: entity.name,
      url: entity.url
    });
  }

  update(entity: Link) {
    return this.http.put(`/api/links/${entity.id}`, {
      name: entity.name,
      url: entity.url
    });
  }

  delete(id) {
    return this.http.delete(`/api/links/${id}`);
  }

}
