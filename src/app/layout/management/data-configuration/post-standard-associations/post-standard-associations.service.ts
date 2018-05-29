import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class PostStandardAssociationsService {

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
    return this.http.get<TableResult<any>>('/api/post-standard-associations', { params });
  }

  import(file: FileTicket) {
    return this.http.post('/api/post-standard-associations/import', file);
  }

  delete(id) {
    return this.http.delete(`/api/post-standard-associations/${id}`);
  }

}
