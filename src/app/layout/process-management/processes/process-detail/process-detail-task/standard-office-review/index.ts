import { Component, OnInit } from '@angular/core';
import { SuperProcessDetailTaskComponent } from '../super-process-task.component';
import { StaticDataSource } from '../static.datasource';

@Component({
  selector: 'process-standard-office-review-for-department',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class StandardOfficeReview extends SuperProcessDetailTaskComponent implements OnInit{

  dataSource: StaticDataSource;
  standardRevisions: StaticDataSource;
  displayedColumns: string[];
  standardColumns: string[];
  list: any[] = [];
  standardList: any[] = [];

  constructor() {
    super();
  }

  ngOnInit () {
    if(this.task.data.opinions.createdItems) {
      this.list = this.list.concat(this.task.data.opinions.createdItems);
    }

    if(this.task.data.opinions.updatedItems) {
      this.list = this.list.concat(this.task.data.opinions.updatedItems);
    }

    if(this.task.data.opinions.deletedItems) {
      this.list = this.list.concat(this.task.data.opinions.deletedItems);
    }
  	
  	this.dataSource = new StaticDataSource(this.list);

  	this.displayedColumns = [
      'content',
      'reason',
      'createdBy',
      'createdAt',
      'adopted',
      'adoptedReason'
    ];


    this.initStandardList();
  }

  initStandardList () {

    if(this.task.data.standardRevisions){
      this.standardList = [
        ...this.task.data.standardRevisions.createdItems.map(item => {
          item.type = '新建标准';
          return item;
        }),
        ...this.task.data.standardRevisions.updatedItems.map(item => {
          item.type = '修订标准';
          return item;
        }),
        ...this.task.data.standardRevisions.deletedItems.map(item => {
          item.type = '废止标准';
          return item;
        }),
      ];
    }

    
    this.standardRevisions = new StaticDataSource(this.standardList);

    this.standardColumns = [
      'type',
      'standardNo',
      'standardName',
      'standardSystem',
      'department',
      'drafter',
      'finishTime'
    ];
  }

}