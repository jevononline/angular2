import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SuperSelectComponent } from '../../../../shared/';
import { StandardCommitteeService } from '../standard-committee.service';

@Component({
  selector: 'app-standard-special-committee-select',
  templateUrl: './standard-special-committee-select.component.html',
  styleUrls: ['./standard-special-committee-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardSpecialCommitteeSelectComponent), multi: true }]
})
export class StandardSpecialCommitteeSelectComponent extends SuperSelectComponent implements OnInit {

  constructor(private standardCommitteeService: StandardCommitteeService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  get() {
    this.standardCommitteeService.getSpecialCommittees().subscribe(data => {
      this.list = data;
    });
  }

}
