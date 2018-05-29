import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { StandardCommitteeTag } from '../standard-committee-tags/standard-committee-tag';
import { StandardCommittee } from './standard-committee';
import { Staff } from '../../management/org/staff/staff';


@Injectable()
export class StandardCommitteeService {

  private standardCommitteeSource = new Subject<StandardCommittee>();

  standardCommittee: StandardCommittee;
  standardCommitteeChange = this.standardCommitteeSource.asObservable();
  constructor(private http: HttpClient) { }

  setStandardCommittee(standardCommittee) {
    this.standardCommittee = standardCommittee;
    this.standardCommitteeSource.next(standardCommittee);
  }

  get(id = 0) {
    return this.http.get<StandardCommittee[]>(`/api/standard-committee/${id}/tree`);
  }

  getSpecialCommittees() {
    return this.http.get<StandardCommittee[]>('/api/standard-committee/special-committee');
  }

  getStatistics() {
    return this.http.get<{ id: number, staffCount: number }[]>('/api/standard-committee/statistics');
  }

  getOneById(id) {
    return this.http.get<StandardCommittee>(`/api/standard-committee/${id}`);
  }

  create(entity: StandardCommittee) {
    return this.http.post<StandardCommittee>('/api/standard-committee', {
      name: entity.name,
      tag: entity.tag || 0,
      responsibilities: entity.responsibilities,
      parent: entity.parent ? { id: entity.parent.id } : null
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/standard-committee/import', file);
  }

  update(entity: StandardCommittee) {
    return this.http.put(`/api/standard-committee/${entity.id}`, {
      name: entity.name,
      tag: entity.tag || 0,
      responsibilities: entity.responsibilities,
      parent: entity.parent ? { id: entity.parent.id } : null
    });
  }

  delete(id) {
    return this.http.delete(`/api/standard-committee/${id}`);
  }

  moveNode(node: StandardCommittee, to: StandardCommittee) {
    return this.http.put(`/api/standard-committee/${node.id}`, {
      name: node.name,
      tag: node.tag,
      responsibilities: node.responsibilities,
      index: to.index,
      parent: {
        id: to.parent.id
      }
    });
  }

  getLeader(id: number) {
    return this.http.get<{ standardCommittee: StandardCommittee, staff: Staff }>(`/api/standard-committee/${id}/leader`);
  }

  setLeader(id: number, staffId: number) {
    return this.http.patch(`/api/standard-committee/${id}/leader`, { staffId });
  }


}

