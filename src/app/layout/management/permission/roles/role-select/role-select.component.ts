


import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SuperSelectComponent } from '../../../../../shared/';

import { RolesService } from '../roles.service';

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RoleSelectComponent), multi: true }]
})
export class RoleSelectComponent extends SuperSelectComponent {

  constructor(private rolesService: RolesService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  get() {
    this.rolesService.get().subscribe(data => {
      this.list = data.results;
    });
  }

}

