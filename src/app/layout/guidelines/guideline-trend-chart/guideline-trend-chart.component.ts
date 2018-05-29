import { Inject, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { Guideline } from '../guideline';
import { GuidelineCategory } from '../guideline-categories/guideline-category';
import { GuidelinesService } from '../guidelines.service';

@Component({
  selector: 'app-guideline-trend-chart',
  templateUrl: './guideline-trend-chart.component.html',
  styleUrls: ['./guideline-trend-chart.component.scss']
})
export class GuidelineTrendChartComponent implements OnInit {

  isReady = false;
  list: Guideline[] = [];
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: GuidelineCategory, private guidelinesService: GuidelinesService) { }

  ngOnInit() {
    this.guidelinesService.getCategoryRank(this.data.id, 3).subscribe(data => {
      this.isReady = true;
      this.list = data;
    });
  }

  gotoGuideline() {
    this.router.navigate(['/guidelines', { categories: this.data.id }]);
  }

}
