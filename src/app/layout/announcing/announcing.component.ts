import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-announcing',
  templateUrl: './announcing.component.html',
  styleUrls: ['./announcing.component.scss']
})
export class AnnouncingComponent implements OnInit {

  @ViewChild('keyword')
  keyword: ElementRef;

  filter = new Subject<string>();

  constructor() { }

  ngOnInit() {
    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });

  }

}

