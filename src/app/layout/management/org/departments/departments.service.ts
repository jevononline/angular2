import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Department } from './department';
import { Staff } from '../staff/staff';
import { Post } from '../posts/post';

@Injectable()
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  getTree(id = 0) {
    return this.http.get<Department[]>(`/api/departments/${id}/tree`);
  }

  getStatistics() {
    return this.http.get<{ id: number, postCount: number, staffCount: number }[]>('/api/departments/statistics');
  }

  get(id: number, tableQuery: TableQuery) {
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }

    return this.http.get<TableResult<Department>>(`/api/departments/${id}/children`, { params });
  }

  getOneById(id) {
    return this.http.get<Department>(`/api/departments/${id}`);
  }

  create(entity: Department) {
    return this.http.post<Department>('/api/departments', {
      name: entity.name,
      abbr: entity.abbr,
      responsibilities: entity.responsibilities,
      remark: entity.remark,
      parent: entity.parent ? { id: entity.parent.id } : null
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/departments/import', file);
  }

  getLeader(id: number) {
    return this.http.get<{ department: Department, staff: Staff | null }>(`/api/departments/${id}/leader`);
  }

  setLeader(id: number, staffId: number) {
    return this.http.patch(`/api/departments/${id}/leader`, { id: staffId });
  }

  update(entity: Department) {
    return this.http.put(`/api/departments/${entity.id}`, {
      name: entity.name,
      abbr: entity.abbr,
      responsibilities: entity.responsibilities,
      remark: entity.remark,
      parent: entity.parent ? { id: entity.parent.id } : null
    });
  }

  delete(id) {
    return this.http.delete(`/api/departments/${id}`);
  }

  moveNode(node: Department, to: Department) {
    return this.http.put(`/api/departments/${node.id}`, {
      name: node.name,
      abbr: node.abbr,
      responsibilities: node.responsibilities,
      remark: node.remark,
      index: to.index,
      parent: {
        id: to.parent.id
      }
    });
  }

}
