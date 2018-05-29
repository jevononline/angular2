import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';

@Component({
  selector: 'app-department-standard-asset-table',
  templateUrl: './department-standard-asset-table.component.html',
  styleUrls: ['./department-standard-asset-table.component.scss']
})
export class DepartmentStandardAssetTableComponent implements OnInit {


  dataList = [];

  list = [];

  @ViewChild('keyword')
  keyword: ElementRef;

  constructor(private standardAssetAnalyticsService: StandardAssetAnalyticsService) { }

  ngOnInit() {
    this.standardAssetAnalyticsService.getDepartmentStandardAssetAnalysis().subscribe(data => {
      this.dataList = data;
      this.list = data;
    });

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        let keyword = this.keyword.nativeElement.value;
        if (keyword) {
          this.list = this.dataList.filter(item => item.department.indexOf(keyword) > -1);
        } else {
          this.list = this.dataList;
        }
      });
  }

}
