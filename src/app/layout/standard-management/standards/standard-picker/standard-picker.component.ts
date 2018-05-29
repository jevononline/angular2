import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';

import { Component, ElementRef, ViewChild, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { StandardTableComponent } from '../standard-table/standard-table.component';
import { StandardSystem } from '../../../system-management/standard-system/standard-system';

@Component({
  selector: 'app-standard-picker',
  templateUrl: './standard-picker.component.html',
  styleUrls: ['./standard-picker.component.scss']
})
export class StandardPickerComponent implements OnInit {

  standardSystem: StandardSystem = { id: 0 } as StandardSystem;
  view: number = 0;

  selected: number[];

  advancedFilter: any;

  @ViewChild('keyword')
  keyword: ElementRef;

  filter = new Subject<string>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number[],
    private dialog: MatDialogRef<StandardPickerComponent>
  ) {

  }

  ngOnInit() {
    this.selected = this.data.slice();
    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });
  }

  onSelectionChange(event) {
    this.selected = event;
  }

  onSetAdvancedFilter(event) {
    this.advancedFilter = event;
  }

  confirm() {
    this.dialog.close(this.selected);
  }

}
