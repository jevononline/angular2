import { Component, OnInit } from '@angular/core';
import { SuperProcessDetailTaskComponent } from '../super-process-task.component';
import { StaticDataSource } from '../static.datasource';

@Component({
  selector: 'process-set-editor',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class SetEditor extends SuperProcessDetailTaskComponent implements OnInit{

  dataSource: StaticDataSource;
  displayedColumns: string[];

  constructor() {
    super();
  }

  ngOnInit () {
  	
  	this.dataSource = new StaticDataSource([this.task]);

  	this.displayedColumns = [
      'department',
      'createdBy',
      'user',
      'createdAt'
    ];
  }

}