import { values } from 'lodash';
import { EChartOption } from 'echarts';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { MetadataService } from '../../../../core/metadata/metadata.service';

import { StandardCategory } from '../../../standard-management/standards/standard-category/standard-category';
import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';

@Component({
  selector: 'app-standard-category-chart',
  templateUrl: './standard-category-chart.component.html',
  styleUrls: ['./standard-category-chart.component.scss']
})
export class StandardCategoryChartComponent implements OnInit, OnChanges {

  option: EChartOption;
  StandardCategoryList: StandardCategory[];

  @Input()
  dimemsion: any;

  mainDiemsion: IdNameValuePair;

  constructor(private metadataService: MetadataService, private standardAssetAnalyticsService: StandardAssetAnalyticsService) {
    this.StandardCategoryList = values(this.metadataService.get('StandardCategories'));
    this.mainDiemsion = this.metadataService.get('Dimensions').StandardCategory;
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.dimemsion) {
      this.standardAssetAnalyticsService.getStandardAssetAnalysis(
        this.mainDiemsion,
        { dimension: this.dimemsion }).subscribe(data => {
          // 无次级维度
          if (!this.dimemsion) {
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
                type: 'category', data: data.map(item => item[this.mainDiemsion.id])
              },
              yAxis: { type: 'value' },
              series: [
                {
                  type: 'bar',
                  data: data.map(item => item.count)
                },
                {
                  type: 'pie',
                  center: ['25%', '50%'],
                  tooltip: {
                    formatter: '{b}: {c} ({d}%)'
                  },
                  data: data.map(item => ({ name: item[this.mainDiemsion.id], value: item.count }))
                }
              ]
            };
          } else {
            // 次级维度 standardCategory
            this.option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                },
              },
              xAxis: [
                {
                  type: 'category',
                  data: data.map(item => item[this.mainDiemsion.id])
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: data[0][this.dimemsion.id].map((item, index) => {
                return {
                  name: item[this.dimemsion.id],
                  type: 'bar',
                  data: data.map(z => z[this.dimemsion.id][index].count)
                }
              })
            };
          }
        });
    }

  }

}
