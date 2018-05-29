import { Component, OnInit } from '@angular/core';
import { SuperProcessDetailTaskComponent } from '../super-process-task.component';
import { StaticDataSource } from '../static.datasource';

@Component({
  selector: 'process-standard-committee-review',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class StandardCommitteeReview extends SuperProcessDetailTaskComponent implements OnInit{

  dataSource: StaticDataSource;
  displayedColumns: string[];
  list: any[] = [];

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
      'createdAt'
    ];
  }

}