

import { Component, OnInit } from '@angular/core';

import { Guideline } from '../guideline';
import { GuidelinesService } from '../guidelines.service';

@Component({
  selector: 'app-guideline-latest',
  templateUrl: './guideline-latest.component.html',
  styleUrls: ['./guideline-latest.component.scss'],
  exportAs: 'appGuidelineLatest'
})
export class GuidelineLatestComponent implements OnInit {
  model: Guideline;

  constructor(private guidelinesService: GuidelinesService) { }

  ngOnInit() {
    this.guidelinesService.getLatestGuideline().subscribe(data => {
      this.model = data;
    });
  }

}
