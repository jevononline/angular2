import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Privilege } from './privilege';

@Injectable()
export class PrivilegesService {

  constructor(private http: HttpClient) { }

  import(file: FileTicket) {
    return this.http.post('/api/privileges', file);
  }

  get(id = 0) {
    return this.http.get<Privilege[]>(`/api/privileges/${id}/tree`);
  }

}
