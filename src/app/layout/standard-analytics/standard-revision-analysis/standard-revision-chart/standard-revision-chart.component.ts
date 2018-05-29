import { EChartOption } from 'echarts';
import { Component, OnInit, Input } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

import { StandardRevisionAnalyticsService } from '../standard-revision-analytics.service';

@Component({
  selector: 'app-standard-revision-chart',
  templateUrl: './standard-revision-chart.component.html',
  styleUrls: ['./standard-revision-chart.component.scss']
})
export class StandardRevisionChartComponent implements OnInit {

  option: EChartOption;

  @Input()
  mainDimension: any;

  @Input()
  metrics: any;

  constructor(private metadataService: MetadataService, private standardRevisionAnalyticsService: StandardRevisionAnalyticsService) { }

  ngOnInit() {
    this.standardRevisionAnalyticsService.getStandardRevisionAnalysis(
      this.mainDimension,
      { metrics: this.metrics, filter: { startDate: new Date(2015, 0, 1), endDate: new Date() } }
    ).subscribe(data => {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [
          {
            type: 'category',
            data: data[this.metrics[0].id].map(item => item[this.mainDimension.id])
          }
        ],
        yAxis: [
          {
            type: 'value',
            minInterval: 1
          }
        ],
        series: this.metrics.map(item => ({
          name: item.name,
          type: 'line',
          data: data[item.id].map(z => z[item.id])
        }))
      }
    });
  }

}
