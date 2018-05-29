import { Component, OnInit } from '@angular/core';
import { SuperProcessDetailTaskComponent } from '../super-process-task.component';
import { StaticDataSource } from '../static.datasource';

@Component({
  selector: 'process-edit',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class ProcessEdit extends SuperProcessDetailTaskComponent implements OnInit{

  dataSource: StaticDataSource;
  displayedColumns: string[];
  list: any[];

  constructor() {
    super();
  }

  ngOnInit () {
    this.list = [
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
  	
  	this.dataSource = new StaticDataSource(this.list);

  	this.displayedColumns = [
      'type',
      'standardNo',
      'standardName',
      'standardSystem',
      'department',
      'drafter',
      'finishTime',
      // 'actions'
    ];
  }

}