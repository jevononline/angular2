import { values } from 'lodash';
import { EChartOption } from 'echarts';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { MetadataService } from '../../../../core/metadata/metadata.service';
import { StandardUsageAnalyticsService } from '../standard-usage-analytics.service';

@Component({
  selector: 'app-standard-usage-chart',
  templateUrl: './standard-usage-chart.component.html',
  styleUrls: ['./standard-usage-chart.component.scss']
})
export class StandardUsageChartComponent implements OnInit, OnChanges {

  option: EChartOption;

  @Input()
  timeSpan: number[] = [];

  @Input()
  metrics: any;

  @Input()
  mainDimension: any;

  StandardCategoryList;

  constructor(private metadataService: MetadataService, private standardUsageAnalyticsService: StandardUsageAnalyticsService) {
    this.StandardCategoryList = values(this.metadataService.get('StandardCategories'));
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.standardUsageAnalyticsService.getStandardUsageAnalysis(this.mainDimension, { timeSpan: this.timeSpan, metrics: this.metrics }).subscribe(data => {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
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
          type: 'bar',
          data: data[item.id].map(z => z[item.id])
        }))
      };
    });
  }

}
