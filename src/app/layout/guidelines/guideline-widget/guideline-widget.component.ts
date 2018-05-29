import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { GuidelineCategory } from '../guideline-categories/guideline-category';
import { GuidelineCategoriesService } from '../guideline-categories/guideline-categories.service';
import { GuidelineTrendChartComponent } from '../guideline-trend-chart/guideline-trend-chart.component';

@Component({
  selector: 'app-guideline-widget',
  templateUrl: './guideline-widget.component.html',
  styleUrls: ['./guideline-widget.component.scss']
})
export class GuidelineWidgetComponent implements OnInit {

  list: GuidelineCategory[] = [];
  constructor(private dialog: MatDialog, private guidelineCategoriesService: GuidelineCategoriesService) {

  }

  ngOnInit() {
    this.guidelineCategoriesService.get().subscribe(data => {
      this.list = data.results.filter(item => item.timeSpanLevel > 0);
    });
  }

  openTrendChart(category) {
    this.dialog.open(GuidelineTrendChartComponent, { data: category, minWidth: 500, maxWidth: 750 });
  }

}
