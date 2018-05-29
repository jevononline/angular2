import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Department } from './departments/department';

@Injectable()
export class OrgService {
  private departmentSource = new Subject<Department>();
  department: Department;
  departmentChange = this.departmentSource.asObservable();

  constructor() { }

  setDepartment(department) {
    this.department = department;
    this.departmentSource.next(department);
  }

}
