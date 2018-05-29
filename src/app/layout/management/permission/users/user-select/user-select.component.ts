import { Component, OnInit, OnChanges, SimpleChanges, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SuperSelectComponent } from '../../../../../shared/';
import { Staff } from '../../../org/staff/staff';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UserSelectComponent), multi: true }]
})
export class UserSelectComponent extends SuperSelectComponent {

  @Input()
  ofId: number = 0;

  @Input()
  of: 'department' | 'standard-network' | 'standard-committee' = 'department';

  @Input()
  level: 'descendant' | 'children' = 'children';

  @Input()
  hasEmptyOption = false;

  constructor(private usersService: UsersService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  isDisabled(item) {
    return item.status === 0 || this.isDisabledOption(item);
  }

  get() {
    if (this.ofId != undefined) {
      if (this.of === 'department') {
        if (this.level === 'descendant') {
          this.usersService.getDescendantsOfDepartment(this.ofId).subscribe(data => {
            this.list = data;
          });
        } else if (this.level === 'children') {
          this.usersService.getOfDepartment(this.ofId).subscribe(data => {
            this.list = data.results;
          });
        }
      } else if (this.of === 'standard-network') {
        if (this.level === 'descendant') {
          this.usersService.getDescendantsOfStandardNetwork(this.ofId).subscribe(data => {
            this.list = data;
          });
        } else if (this.level === 'children') {
          this.usersService.getOfStandardNetwork(this.ofId).subscribe(data => {
            this.list = data.results;
          });
        }
      } else if (this.of === 'standard-committee') {
        if (this.level === 'descendant') {
          this.usersService.getDescendantsOfStandardCommittee(this.ofId).subscribe(data => {
            this.list = data;
          });
        } else if (this.level === 'children') {
          this.usersService.getOfStandardCommittee(this.ofId).subscribe(data => {
            this.list = data.results;
          });
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ofId && !changes.ofId.firstChange) {
      this.clear();
      this.get();
    }
  }

}
