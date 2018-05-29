import { Component, OnInit } from '@angular/core';

import { MetadataService } from '../../../core/metadata/metadata.service';

@Component({
  selector: 'app-standard-revision-analysis',
  templateUrl: './standard-revision-analysis.component.html',
  styleUrls: ['./standard-revision-analysis.component.scss']
})
export class StandardRevisionAnalysisComponent implements OnInit {

  standardRevisionMainDimension: IdNameValuePair;

  standardRevisionMetrics: IdNameValuePair[];

  standardUsageMetrics: IdNameValuePair[];

  standardUsageStandardCategoryMainDimension: IdNameValuePair;
  standardUsageStandardCategoryTimeSpan: number[] = [];

  standardUsageStandardSystemMainDimension: IdNameValuePair;
  standardUsageStandardSystemTimeSpan: number[] = [];

  constructor(private metadataService: MetadataService) {
    const Metrics = metadataService.get('Metrics');
    const Dimensions = metadataService.get('Dimensions');

    this.standardRevisionMetrics = [Metrics.New, Metrics.Revise, Metrics.Obsolete];
    this.standardRevisionMainDimension = Dimensions.Yearly;

    this.standardUsageMetrics = [Metrics.Download, Metrics.Read, Metrics.View];
    this.standardUsageStandardCategoryMainDimension = Dimensions.StandardCategory;
    this.standardUsageStandardSystemMainDimension = Dimensions.StandardSystem;
  }

  ngOnInit() {

  }

  onStandardCategoryTimeSpanToggle(event) {
    this.standardUsageStandardCategoryTimeSpan = event.timeSpan;
  }

  onStandardSystemTimeSpanToggle(event) {
    this.standardUsageStandardSystemTimeSpan = event.timeSpan;
  }

}
