import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {


  @ViewChild('keyword')
  keyword: ElementRef;

  filter = new Subject<string>();

  constructor(public authService: AuthService) { }

  ngOnInit() {
    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });

  }
}
