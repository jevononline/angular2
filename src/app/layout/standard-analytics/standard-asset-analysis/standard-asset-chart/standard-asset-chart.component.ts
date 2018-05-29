import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';

@Component({
  selector: 'app-standard-asset-chart',
  templateUrl: './standard-asset-chart.component.html',
  styleUrls: ['./standard-asset-chart.component.scss']
})
export class StandardAssetChartComponent implements OnInit {

  option: EChartOption;

  constructor(private metadataService: MetadataService, private standardAssetAnalyticsService: StandardAssetAnalyticsService) { }

  ngOnInit() {
    this.standardAssetAnalyticsService.getStandardAssetAnalysis(this.metadataService.get('Dimensions').StandardAsset).subscribe(data => {
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
          type: 'category', data: data.map(item => item.name)
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
            data: data.map(item => ({ name: item.name, value: item.count }))
          }
        ]
      };
    });
  }

}
