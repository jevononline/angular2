import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SuperTreeSelectComponent } from '../../../../../shared/';

import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-select',
  templateUrl: './department-select.component.html',
  styleUrls: ['./department-select.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DepartmentSelectComponent), multi: true }
  ]
})
export class DepartmentSelectComponent extends SuperTreeSelectComponent {
  constructor(private departmentsService: DepartmentsService) {
    super();
  }

  getData() {
    return new Promise<void>((resolve) => {
      this.departmentsService.getTree(this.root).subscribe((data) => {
        this.nodes = data;
        resolve();
      });
    });
  }
}
