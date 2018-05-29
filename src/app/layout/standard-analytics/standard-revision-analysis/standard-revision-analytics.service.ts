import { isDate } from 'lodash';
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class StandardRevisionAnalyticsService {

  constructor(private http: HttpClient) { }


  getStandardRevisionAnalysis(mainDimension: IdNameValuePair, { metrics, filter }: { metrics?: IdNameValuePair[], filter?: { [key: string]: any } } = {}) {
    let params = new HttpParams();
    if (metrics) {
      params = params.append('metrics', metrics.map(item => item.id).toString());
    }
    if (filter) {
      for (let key in filter) {
        let value = filter[key];

        params = params.append(key, isDate(value) ? moment(value).format('YYYY-MM-DD') : value.toString());
      }
    }
    return this.http.get<{ [key: string]: any }[]>(`/api/standard-revision-analytics/${mainDimension.id}`, { params });
  }
}
