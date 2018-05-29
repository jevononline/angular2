import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-role-user-association',
  templateUrl: './role-user-association.component.html',
  styleUrls: ['./role-user-association.component.scss']
})
export class RoleUserAssociationComponent implements OnInit {
  roleId: number;
  @ViewChild('keyword')
  keyword: ElementRef;

  filter = new Subject<string>();

  constructor( @Inject(MAT_DIALOG_DATA) public data: number) {
    this.roleId = data;
  }

  ngOnInit() {
    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });
  }

}
