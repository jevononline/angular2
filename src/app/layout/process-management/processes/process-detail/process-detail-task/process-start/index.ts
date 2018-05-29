import { Component, OnInit } from '@angular/core';
import { SuperProcessDetailTaskComponent } from '../super-process-task.component';
import { StaticDataSource } from '../static.datasource';

@Component({
  selector: 'process-start',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class ProcessStart extends SuperProcessDetailTaskComponent implements OnInit{

  dataSource: StaticDataSource;
  displayedColumns: string[];
  list: any[] = [];

  constructor() {
    super();
  }

  ngOnInit () {

    if(this.task.data) {
      this.list.push(this.task.data);
    }
  	
  	this.dataSource = new StaticDataSource(this.list);

  	this.displayedColumns = ['departmentReviewTime','expertCommitteeReviewTime','standardCommitteeReviewTime','coordinationDepartmentReviewDuration','draftReviewDuration'];
  }

}