import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { StandardAssetAnalyticsService } from '../standard-asset-analytics.service';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-post-standard-asset-table',
  templateUrl: './post-standard-asset-table.component.html',
  styleUrls: ['./post-standard-asset-table.component.scss']
})
export class PostStandardAssetTableComponent implements OnInit {

  dataList = [];

  list = [];

  @ViewChild('keyword')
  keyword: ElementRef;


  constructor(private standardAssetAnalyticsService: StandardAssetAnalyticsService) { }

  ngOnInit() {
    this.standardAssetAnalyticsService.getPostStandardAssetAnalysis().subscribe(data => {
      this.dataList = data;
      this.list = data;
    });

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        let keyword = this.keyword.nativeElement.value;
        if (keyword) {
          this.list = this.dataList.filter(item => item.post.indexOf(keyword) > -1);
        } else {
          this.list = this.dataList;
        }
      });

  }

}
