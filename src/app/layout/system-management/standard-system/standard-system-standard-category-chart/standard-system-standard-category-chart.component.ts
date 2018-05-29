import { values } from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import { EChartOption } from 'echarts';
import { Component, OnInit, OnDestroy, Optional, ViewChild } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

import { LayoutComponent } from '../../../layout.component';
import { ChartComponent } from '../../../../shared/';
import { StandardCategory } from '../../../standard-management/standards/standard-category/standard-category';
import { StandardSystemService } from '../standard-system.service';

@Component({
  selector: 'app-standard-system-standard-category-chart',
  templateUrl: './standard-system-standard-category-chart.component.html',
  styleUrls: ['./standard-system-standard-category-chart.component.scss']
})
export class StandardSystemStandardCategoryChartComponent implements OnInit, OnDestroy {

  metricValues: number[] = [];
  standardCategorylist: StandardCategory[];

  option: EChartOption;
  data: any;
  buttonState: boolean;

  @ViewChild(ChartComponent)
  chartControl: ChartComponent;

  subscription: Subscription;

  constructor(private metadataService: MetadataService, private standardSystemService: StandardSystemService, @Optional() private layout: LayoutComponent) {
    this.standardCategorylist = values(this.metadataService.get('StandardCategories'));
    this.metricValues = this.standardCategorylist.slice(0, 3).map(item => item.value);
    this.buttonState = true;
  }

  ngOnInit() {

    this.standardSystemService.getStatisticsByCategories().subscribe(data => {
      this.data = data.reverse();
      this.setOptionData();
    });

    if (this.layout) {
      this.subscription = Observable.merge(this.layout.sidenav.onOpen, this.layout.sidenav.onClose).subscribe(() => {
        this.chartControl.resize();
      });
    }

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onMetricChange() {
    this.setOptionData();
  }

  isDisabledOption(index) {
    return (function (item) {
      return this.metricValues.filter((z, i) => i !== index).findIndex(z => z === item.value) > -1;
    }).bind(this);
  }

  renderDataView() {

    this.buttonState = false;

    let container = this.chartControl.chart.getDom();
    let html = [];
    html.push('<table class="data-table" style="margin-top:30px">');
    html.push('<thead><tr>');
    html.push('<th></th>');

    let columnTotals = [];
    for (let category of this.standardCategorylist) {
      html.push(`<th class="numberic">${category.name}</th>`);
      columnTotals.push(0);
    }
    html.push('<th class="numberic">总计</th>');
    columnTotals.push(0);

    html.push('</tr></thead>');


    html.push('<tbody>');
    for (let i = 0; i < this.data.length; i++) {
      let row = this.data[i];
      html.push('<tr>');
      html.push(`<th>${row.name}</th>`);
      let rowTotal = 0;
      for (let j = 0; j < row.categories.length; j++) {
        let cell = row.categories[j];
        rowTotal += cell.standardCount;
        columnTotals[j] += cell.standardCount;
        html.push(`<td>${cell.standardCount}</td>`);
      }
      html.push(`<td>${rowTotal}</td>`);
      columnTotals[columnTotals.length - 1] += rowTotal;

      html.push('</tr>');

    }
    html.push('<tr>');
    html.push('<th>合计</th>');
    for (let item of columnTotals) {
      html.push(`<td>${item}</td>`);
    }
    html.push('</tr>');
    html.push('</tbody>');
    html.push('</table>');



    let div = document.createElement('div');
    div.className = 'dataview-container';
    div.innerHTML = html.join('');

    let actionsBar = document.createElement('div');
    actionsBar.className = 'dataview-actions';

    let closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '关闭';

    closeBtn.onclick = () => {
      container.removeChild(div);
      this.buttonState = true;
    };

    actionsBar.appendChild(closeBtn);
    div.appendChild(actionsBar);



    container.appendChild(div);
  }

  setOptionData() {
    let data = this.data;
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: this.metricValues.map(item => this.standardCategorylist.find(z => z.value === item).name)
      },
      grid: {
        left: 96
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: data.map(item => item.name)
      },
      series: this.metricValues.map(item => {
        let metric = this.standardCategorylist.find(z => z.value === item);
        let x = { name: metric.name, type: 'bar', data: [] };
        data.forEach(z => {
          let category = z.categories.find(x => x.categoryValue === metric.value);
          x.data.push(category.standardCount);
        });
        return x;
      }),

    };
  }
}
