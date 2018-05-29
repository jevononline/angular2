import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class StandardUsageAnalyticsService {

  constructor(private http: HttpClient) { }

  // rank只能传一个指标
  getStandardUsageRankAnalysis(mainDimension: IdNameValuePair, rank, { timeSpan, metric }: { timeSpan: number[], metric: IdNameValuePair }) {
    let params = new HttpParams();

    params = params.append('timeSpan', timeSpan.toString());
    params = params.append('metric', metric.id.toString());


    return this.http.get<{ count: number, [key: string]: any }[]>(`/api/standard-usage-analytics/rank/${rank}/${mainDimension.id}`, { params });
  }

  getStandardUsageAnalysis(mainDimension: IdNameValuePair, { timeSpan, metrics }: { timeSpan: number[], metrics: IdNameValuePair[] }) {
    let params = new HttpParams();

    params = params.append('timeSpan', timeSpan.toString());
    params = params.append('metrics', metrics.map(item => item.id).toString());


    return this.http.get<{ count: number, [key: string]: any }[]>(`/api/standard-usage-analytics/${mainDimension.id}`, { params });
  }
}
