import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { SuperiorDocument } from './superior-document';

@Injectable()
export class SuperiorDocumentsService {

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
    return this.http.get<{ results: SuperiorDocument[], total: number }>('/api/superior-documents', { params });
  }

  getOneById(id) {
    return this.http.get<SuperiorDocument>(`/api/superior-documents/${id}`).map(data => {
      data.executeDate = moment(data.executeDate).toDate();
      return data;
    });
  }

  create(entity: SuperiorDocument) {
    return this.http.post('/api/superior-documents', {
      documentNo: entity.documentNo,
      documentName: entity.documentName,
      timeSpan: entity.timeSpan,
      issuer: entity.issuer,
      executeDate: entity.executeDate,
      files: entity.files,
      remark: entity.remark
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/superior-documents/import', file);
  }

  update(entity: SuperiorDocument) {
    return this.http.put(`/api/superior-documents/${entity.id}`, {
      documentNo: entity.documentNo,
      documentName: entity.documentName,
      timeSpan: entity.timeSpan,
      issuer: entity.issuer,
      executeDate: entity.executeDate,
      files: entity.files,
      remark: entity.remark
    });
  }

  delete(id) {
    return this.http.delete(`/api/superior-documents/${id}`);
  }
}
