import { Component, OnInit } from '@angular/core';
import { SuperProcessDetailTaskComponent } from '../super-process-task.component';

@Component({
  selector: 'process-set-receiving-department',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class SetReceivingDepartment extends SuperProcessDetailTaskComponent implements OnInit{

  constructor() {
    super();
  }

  ngOnInit () {

  }

}
