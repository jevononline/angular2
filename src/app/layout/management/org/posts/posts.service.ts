import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Department } from '../departments/department';
import { Post } from './post';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  get(departmentId: number, tableQuery: TableQuery) {
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get<{ results: Post[], total: number }>(`/api/departments/${departmentId}/posts`, { params });
  }

  getOneById(id) {
    return this.http.get<Post>(`/api/posts/${id}`);
  }

  getGroupedByDepartments(departmentIds: number[]) {
    return this.http.get<Department[]>(`/api/departments/grouped-by/${departmentIds.toString()}/posts`);
  }

  create(entity: Post) {
    return this.http.post<Post>('/api/posts', {
      name: entity.name,
      department: {
        id: entity.department.id
      },
      isDisabled: entity.isDisabled,
      description: entity.description
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/posts/import', file);
  }

  update(entity: Post) {
    return this.http.put(`/api/posts/${entity.id}`, {
      name: entity.name,
      department: {
        id: entity.department.id
      },
      isDisabled: entity.isDisabled,
      description: entity.description
    });
  }

  delete(id) {
    return this.http.delete(`/api/posts/${id}`);
  }
}
