import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Department } from '../departments/department';
import { Post } from '../posts/post';
import { Staff } from './staff';

@Injectable()
export class StaffService {

  constructor(private http: HttpClient) { }

  // of department
  getDescendantsOfDepartment(departmentId = 0) {
    return this.http.get<Staff[]>(`/api/departments/${departmentId}/staff/descendants`);
  }

  getDescendantsOfStandardNetwork(departmentId = 0) {
    return this.http.get<Staff[]>(`/api/standard-network/${departmentId}/staff/descendants`);
  }

  getDescendantsOfStandardCommittee(id: number) {
    return this.http.get<Staff[]>(`/api/standard-committee/${id}/staff/descendants`);
  }

  getOfDepartment(departmentId: number, tableQuery?: TableQuery) {

    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }

    return this.http.get<{ results: Staff[], total: number }>(`/api/departments/${departmentId}/staff`, { params });
  }

  getOfStandardNetwork(departmentId: number) {
    return this.http.get<{ results: Staff[], total: number }>(`/api/standard-network/${departmentId}/staff`);
  }

  getOfStandardCommittee(id: number) {
    return this.http.get<{ results: Staff[], total: number }>(`/api/standard-committee/${id}/staff`);
  }


  getOneById(id) {
    return this.http.get<Staff>(`/api/staff/${id}`);
  }

  getGroupedByPosts(departmentIds: number[]) {
    return this.http.get<Post[]>(`/api/posts/grouped-by/${departmentIds.toString()}/staff`);
  }

  create(entity: Staff) {
    return this.http.post<Staff>('/api/staff', {
      staffNo: entity.staffNo,
      fullName: entity.fullName,
      email: entity.email,
      mobile: entity.mobile,
      status: entity.status,
      posts: entity.posts.map(item => ({ id: item.id })),
      remark: entity.remark,
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/staff/import', file);
  }

  update(entity: Staff) {
    return this.http.put(`/api/staff/${entity.id}`, {
      staffNo: entity.staffNo,
      fullName: entity.fullName,
      email: entity.email,
      mobile: entity.mobile,
      status: entity.status,
      posts: entity.posts.map(item => ({ id: item.id })),
      remark: entity.remark,
    });
  }


  delete(id) {
    return this.http.delete(`/api/staff/${id}`);
  }
}
