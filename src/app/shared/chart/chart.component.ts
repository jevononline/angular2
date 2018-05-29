import * as echarts from 'echarts';
import { ECharts, EChartOption } from 'echarts';
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'ux-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges, OnDestroy {

  theme = {
    color: [
      '#21aacd',
      '#a2d047',
      '#f48944',
      '#985686',
      '#bea171',
      '#dc5a5c'
    ],
    legend: {
      icon: 'circle'
    }
  };

  @ViewChild('chartContainer')
  chartContainer: ElementRef;

  chart: ECharts;

  @Input()
  option: EChartOption;

  @Input()
  state: 'loading' | 'complete' | 'no-data';

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.option) {
      this.makeChart();
    }
  }

  ngOnDestroy() {
    this.dispose();
  }

  makeChart() {
    this.dispose();
    if (this.option) {
      this.chart = echarts.init(this.chartContainer.nativeElement, this.theme);
      this.chart.setOption(this.option);
    }
  }

  @HostListener('window:resize')
  resize() {
    if (this.chart) {
      this.chart.resize();
    }
  }

  dispose() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

}
