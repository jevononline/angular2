import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';

import { StandardSystemService } from './standard-system.service';



@Component({
  selector: 'app-standard-system',
  templateUrl: './standard-system.component.html',
  styleUrls: ['./standard-system.component.scss']
})
export class StandardSystemComponent implements OnInit {

  isReady = false;
  @ViewChild('keyword')
  keyword: ElementRef;

  filter = new Subject<string>();

  constructor(private standardSystemService: StandardSystemService) {
  }

  ngOnInit() {
    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });
  }

  onActivate(event) {
    this.isReady = true;


    this.standardSystemService.setStandardSystem(event.data);


  }

}


