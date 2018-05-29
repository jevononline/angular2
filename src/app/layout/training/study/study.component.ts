import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  selectedTab: number = 0;
  constructor() { }

  ngOnInit() {

  }

}
