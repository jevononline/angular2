import { EChartOption } from 'echarts';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { StandardUsageAnalyticsService } from '../standard-usage-analytics.service';

@Component({
  selector: 'app-standard-usage-rank-chart',
  templateUrl: './standard-usage-rank-chart.component.html',
  styleUrls: ['./standard-usage-rank-chart.component.scss']
})
export class StandardUsageRankChartComponent implements OnInit, OnChanges {

  option: EChartOption;

  @Input()
  timeSpan: number[];

  @Input()
  metric: any;

  @Input()
  mainDimension: any;

  constructor(private standardUsageAnalyticsService: StandardUsageAnalyticsService) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.standardUsageAnalyticsService.getStandardUsageRankAnalysis(this.mainDimension, 10, { timeSpan: this.timeSpan, metric: this.metric }).subscribe(data => {
      data = data.reverse();
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 160
        },
        xAxis: [
          {
            type: 'value',
            minInterval: 1
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisLabel: {
              formatter: function (value, index) {
                if (value.length > 16) {
                  value = value.slice(0, 16) + '...';
                }
                return value;
              }
            },
            data: data.map(item => item[this.mainDimension.id])
          }
        ],
        series: [
          {
            name: this.metric.name,
            type: 'bar',
            data: data.map(item => item[this.metric.id])
          }
        ]
      }
    });
  }

}
