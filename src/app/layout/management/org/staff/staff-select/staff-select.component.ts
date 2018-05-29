
import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SuperSelectComponent } from '../../../../../shared/';
// import { Department } from '../../departments/department';
import { Post } from '../../posts/post';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-select',
  templateUrl: './staff-select.component.html',
  styleUrls: ['./staff-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StaffSelectComponent), multi: true }]
})
export class StaffSelectComponent extends SuperSelectComponent {

  @ViewChild('keyword', { read: ElementRef })
  keyword: ElementRef;

  @Input()
  ofId: number = 0;

  @Input()
  of: 'department' | 'standard-network' | 'standard-committee' = 'department';

  @Input()
  level: 'descendant' | 'children' = 'children';

  constructor(private staffService: StaffService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  isDisabled(item) {
    return item.status === 0 || this.isDisabledOption(item);
  }

  get() {

    if (this.of === 'department') {
      if (this.level === 'descendant') {
        this.staffService.getDescendantsOfDepartment(this.ofId).subscribe(data => {
          this.list = data;
          this.listCopy = this.list.slice();
        });
      } else if (this.level === 'children') {
        this.staffService.getOfDepartment(this.ofId).subscribe(data => {
          this.list = data.results;
          this.listCopy = this.list.slice();
        });
      }
    } else if (this.of === 'standard-network') {
      if (this.level === 'descendant') {
        this.staffService.getDescendantsOfStandardNetwork(this.ofId).subscribe(data => {
          this.list = data;
          this.listCopy = this.list.slice();
        });
      } else if (this.level === 'children') {
        this.staffService.getOfStandardNetwork(this.ofId).subscribe(data => {
          this.list = data.results;
          this.listCopy = this.list.slice();
        });
      }
    } else if (this.of === 'standard-committee') {
      if (this.level === 'descendant') {
        this.staffService.getDescendantsOfStandardCommittee(this.ofId).subscribe(data => {
          this.list = data;
          this.listCopy = this.list.slice();
        });
      } else if (this.level === 'children') {
        this.staffService.getOfStandardCommittee(this.ofId).subscribe(data => {
          this.list = data.results;
          this.listCopy = this.list.slice();
        });
      }
    }
    // copy 一份list

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ofId && !changes.ofId.firstChange) {
      this.clear();
      this.get();
    }
  }

  myOnClose() {
    this.onClose();
    this.keyword.nativeElement.value = '';
    this.filterList();
  }

  filterList(keyword?: string) {
    if (keyword) {
      this.list = this.listCopy.filter(item => item.staffNo.indexOf(keyword) > -1 || item.fullName.indexOf(keyword) > -1);
    } else {
      this.list = this.listCopy;
    }
  }

}
