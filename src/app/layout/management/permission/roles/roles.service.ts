import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Role } from './role';

@Injectable()
export class RolesService {

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
    return this.http.get<{ results: Role[], total: number }>('/api/roles', { params });
  }

  getOneById(id) {
    return this.http.get<Role>(`/api/roles/${id}`);
  }

  create(entity: Role) {
    return this.http.post('/api/roles', {
      name: entity.name,
      privileges: entity.privileges.map(item => { return { id: item.id }; })
    });
  }

  update(entity: Role) {
    return this.http.put(`/api/roles/${entity.id}`, {
      name: entity.name,
      privileges: entity.privileges.map(item => { return { id: item.id }; })
    });
  }

  delete(id) {
    return this.http.delete(`/api/roles/${id}`);
  }

}
