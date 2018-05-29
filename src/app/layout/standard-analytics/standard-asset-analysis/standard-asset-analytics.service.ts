import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class StandardAssetAnalyticsService {

  constructor(private http: HttpClient) { }



  getStandardAssetAnalysis(mainDimension: IdNameValuePair, { dimension }: { dimension?: IdNameValuePair } = {}) {
    let params = new HttpParams();
    // 图表只支持一个次级维度
    if (dimension) {
      params = params.append('dimension', dimension.id);
    }
    return this.http.get<{ count: number, [key: string]: any }[]>(`/api/standard-asset-analytics/${mainDimension.id}`, { params });
  }

  getPostStandardAssetAnalysis() {
    return this.http.get<{ post: string, department: string, count: number }[]>(`/api/standard-asset-analytics/post`);
  }

  getDepartmentStandardAssetAnalysis() {
    return this.http.get<{ department: string, count: number }[]>(`/api/standard-asset-analytics/department`);

  }

}
