import { Component, OnInit } from '@angular/core';
import { SuperProcessDetailTaskComponent } from '../super-process-task.component';

@Component({
  selector: 'process-publish',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class ProcessPublish extends SuperProcessDetailTaskComponent implements OnInit{

  constructor() {
    super();
  }

  ngOnInit () {

  }

}