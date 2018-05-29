import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { StandardCategory } from '../../standard-management/standards/standard-category/standard-category';
import { StandardSystem } from './standard-system';


@Injectable()
export class StandardSystemService {

  private standardSystemSource = new Subject<StandardSystem>();
  standardSystem: StandardSystem;
  standardSystemChange = this.standardSystemSource.asObservable();


  constructor(private http: HttpClient) { }

  setStandardSystem(standardSystem) {
    this.standardSystem = standardSystem;
    this.standardSystemSource.next(standardSystem);
  }

  /**
   * 
   * @param id 
   * @param ofSpecialStandardCommittee true 打了专委会标签的体系 false 所有体系
   */
  getTree(id = 0, ofSpecialStandardCommittee = false) {
    return this.http.get<StandardSystem[]>(`/api/standard-system/${id}/tree?ofSpecialStandardCommittee=${ofSpecialStandardCommittee}`);
  }

  getStatistics(view: number) {
    return this.http.get<{ id: number, standardCount: number }[]>(`/api/standard-system/statistics/${view}`);
  }

  getStatisticsByCategories(view = 0) {
    return this.http.get<{ id: number, name: string, categories: { categoryValue: number, standardCount: number }[] }[]>(`/api/standards-system/statistics/${view}/by-standard-categories`);
  }

  get(id, tableQuery: TableQuery) {
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }

    return this.http.get<{ results: StandardSystem[], total: number }>(`/api/standard-system/${id}/children`, { params });
  }

  getOneById(id) {
    return this.http.get<StandardSystem>(`/api/standard-system/${id}`);
  }

  create(entity: StandardSystem) {
    return this.http.post<StandardSystem>('/api/standard-system', {
      structureNo: entity.structureNo,
      name: entity.name,
      standardCommittee: entity.standardCommittee ? { id: entity.standardCommittee.id } : null,
      remark: entity.remark,
      parent: entity.parent ? { id: entity.parent.id } : null
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/standard-system/import', file);
  }

  update(entity: StandardSystem) {
    return this.http.put(`/api/standard-system/${entity.id}`, {
      structureNo: entity.structureNo,
      name: entity.name,
      level: entity.level,
      standardCommittee: entity.standardCommittee ? { id: entity.standardCommittee.id } : null,
      remark: entity.remark,
      parent: entity.parent ? { id: entity.parent.id } : null
    });
  }

  delete(id) {
    return this.http.delete(`/api/standard-system/${id}`);
  }

  moveNode(node: StandardSystem, to: StandardSystem) {
    return this.http.put(`/api/standard-system/${node.id}`, {
      structureNo: node.structureNo,
      name: node.name,
      standardCommittee: node.standardCommittee ? { id: node.standardCommittee.id } : null,
      remark: node.remark,
      index: to.index,
      parent: {
        id: to.parent.id
      }
    });
  }

}

