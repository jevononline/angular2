import { EChartOption } from 'echarts';
import { Component, OnInit, Input } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

import { StandardRevisionAnalyticsService } from '../standard-revision-analytics.service';

@Component({
  selector: 'app-standard-revision-type-chart',
  templateUrl: './standard-revision-type-chart.component.html',
  styleUrls: ['./standard-revision-type-chart.component.scss']
})
export class StandardRevisionTypeChartComponent implements OnInit {

  option: EChartOption;

  mainDimension: any;

  constructor(private metadataService: MetadataService, private standardRevisionAnalyticsService: StandardRevisionAnalyticsService) {
    // 主维度：标准修制定类型
    this.mainDimension = this.metadataService.get('Dimensions').StandardRevisionType;
    // 指标：数量 count
  }

  ngOnInit() {

    this.standardRevisionAnalyticsService.getStandardRevisionAnalysis(
      this.mainDimension
    ).subscribe(data => {
      this.option = {
        tooltip: {},
        grid: {
          left: '50%',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
          }
        },
        xAxis: {
          type: 'category', data: data.map(item => item[this.mainDimension.id])
        },
        yAxis: { type: 'value', minInterval: 1 },
        series: [
          {
            type: 'bar',
            data: data.map(item => item.count)
          },
          {
            type: 'pie',
            center: ['25%', '50%'],
            radius: ['50%', '75%'],
            tooltip: {
              formatter: '{b}: {c} ({d}%)'
            },
            data: data.map(item => ({ name: item[this.mainDimension.id], value: item.count }))
          }
        ]
      };
    });
  }

}
