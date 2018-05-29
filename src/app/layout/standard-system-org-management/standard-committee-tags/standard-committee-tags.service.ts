import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StandardCommitteeTag } from './standard-committee-tag';

@Injectable()
export class StandardCommitteeTagsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<StandardCommitteeTag[]>('/api/standard-committee-tags');
  }

}
