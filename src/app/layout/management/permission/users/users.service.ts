import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from './user';

@Injectable()
export class UsersService {

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
    return this.http.get<{ results: User[], total: number }>('/api/users', { params });
  }

  getDescendantsOfDepartment(departmentId = 0) {
    return this.http.get<User[]>(`/api/departments/${departmentId}/users/descendants`);
  }

  getDescendantsOfStandardNetwork(departmentId = 0) {
    return this.http.get<User[]>(`/api/standard-network/${departmentId}/users/descendants`);
  }

  getDescendantsOfStandardCommittee(id: number) {
    return this.http.get<User[]>(`/api/standard-committee/${id}/users/descendants`);
  }

  getOfDepartment(departmentId: number) {
    return this.http.get<{ results: User[], total: number }>(`/api/departments/${departmentId}/users`);
  }

  getOfStandardNetwork(departmentId: number) {
    return this.http.get<{ results: User[], total: number }>(`/api/standard-network/${departmentId}/users`);
  }

  getOfStandardCommittee(id: number) {
    return this.http.get<{ results: User[], total: number }>(`/api/standard-committee/${id}/users`);
  }

  getOneById(id) {
    return this.http.get<User>(`/api/users/${id}`);
  }

  create(entity: User) {
    return this.http.post('/api/users', {
      loginId: entity.loginId,
      password: entity.password,
      isEnabled: entity.isEnabled,
      staff: { id: entity.staff.id },
      roles: entity.roles.map(item => { return { id: item.id }; })
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/users/import', file);
  }

  update(entity: User) {
    return this.http.put(`/api/users/${entity.id}`, {
      loginId: entity.loginId,
      isEnabled: entity.isEnabled,
      staff: { id: entity.staff.id },
      roles: entity.roles.map(item => { return { id: item.id }; })
    });
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.http.patch(`/api/users/password`, { oldPassword, newPassword });
  }

  resetPassword(id: number, newPassword: string) {
    return this.http.patch(`/api/users/${id}/password`, { newPassword });
  }

  delete(id) {
    return this.http.delete(`/api/users/${id}`);
  }

  logout() {
    return this.http.get('/api/users/logout');
  }
}
