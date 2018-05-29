import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Regulation } from './regulation';

@Injectable()
export class RegulationsService {

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
    return this.http.get<{ results: Regulation[], total: number }>('/api/regulations', { params });
  }

  getOneById(id) {
    return this.http.get<Regulation>(`/api/regulations/${id}`).map(data => {
      data.executeDate = moment(data.executeDate).toDate();
      return data;
    });
  }

  create(entity: Regulation) {
    return this.http.post('/api/regulations', {
      category: { id: entity.category.id },
      documentNo: entity.documentNo,
      documentName: entity.documentName,
      file: entity.file,
      issuer: entity.issuer,
      executeDate: entity.executeDate,
      remark: entity.remark
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/regulations/import', file);
  }

  update(entity: Regulation) {
    return this.http.put(`/api/regulations/${entity.id}`, {
      category: { id: entity.category.id },
      documentNo: entity.documentNo,
      documentName: entity.documentName,
      file: entity.file,
      issuer: entity.issuer,
      executeDate: entity.executeDate,
      remark: entity.remark
    });
  }

  delete(id) {
    return this.http.delete(`/api/regulations/${id}`);
  }
}
