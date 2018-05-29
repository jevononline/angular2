import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-time-span-toggle',
  templateUrl: './time-span-toggle.component.html',
  styleUrls: ['./time-span-toggle.component.scss']
})
export class TimeSpanToggleComponent implements OnInit {

  timeSpanLevel = 7;

  toggle = 0;
  timeSpan = [1, new Date().getFullYear()]; //chu s

  @ViewChild('timeSpanToggleGroup')
  toggleGroup: MatButtonToggleGroup;

  @Output()
  change = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.toggleGroup.value = 0;
  }

  onChange() {

    if (this.toggleGroup.value === 0) {
      this.change.emit({ toggle: this.toggleGroup.value, timeSpan: [] });
    } else {
      this.change.emit({ toggle: this.toggleGroup.value, timeSpan: this.timeSpan });
    }

  }



}
