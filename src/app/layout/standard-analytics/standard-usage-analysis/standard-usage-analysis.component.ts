import { values, find } from 'lodash';
import { Component, OnInit } from '@angular/core';

import { MetadataService } from '../../../core/metadata/metadata.service';

@Component({
  selector: 'app-standard-usage-analysis',
  templateUrl: './standard-usage-analysis.component.html',
  styleUrls: ['./standard-usage-analysis.component.scss']
})
export class StandardUsageAnalysisComponent implements OnInit {



  timeSpan = [1, new Date().getFullYear()];

  standardUsageMetricDisplayedIds: string[];

  standardUsageStandardMainDimension: any;
  standardUsageStandardMetric: any;

  standardUsageStaffMainDimension: any;
  standardUsageStaffMetric: any;

  standardUsagePostMainDimension: any;
  standardUsagePostMetric: any;

  standardUsageDepartmentMainDimension: any;
  standardUsageDepartmentMetric: any;

  constructor(private metadataService: MetadataService) {
    this.standardUsageMetricDisplayedIds = ['download', 'read', 'view'];

    this.standardUsageStandardMainDimension = metadataService.get('Dimensions').Standard;
    this.standardUsageStandardMetric = metadataService.get('Metrics').Download;

    this.standardUsageStaffMainDimension = metadataService.get('Dimensions').Staff;
    this.standardUsageStaffMetric = metadataService.get('Metrics').Download;

    this.standardUsagePostMainDimension = metadataService.get('Dimensions').Post;
    this.standardUsagePostMetric = metadataService.get('Metrics').Download;

    this.standardUsageDepartmentMainDimension = metadataService.get('Dimensions').Department;
    this.standardUsageDepartmentMetric = metadataService.get('Metrics').Download;
  }

  ngOnInit() {

  }

  onTimeSpanToggle(event) {
    this.timeSpan = event.timeSpan;
  }

}
