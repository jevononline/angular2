import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Department } from '../../management/org/departments/department';
import { Staff } from '../../management/org/staff/staff';


@Injectable()
export class StandardNetworkService {

  private departmentSource = new Subject<Department>();

  department: Department;
  departmentChange = this.departmentSource.asObservable();
  constructor(private http: HttpClient) { }

  setDepartment(department) {
    this.department = department;
    this.departmentSource.next(department);
  }

  get(id = 0) {
    return this.http.get<Department[]>(`/api/standard-network/${id}/tree`);
  }

  getStatistics() {
    return this.http.get<{ id: number, staffCount: number }[]>('/api/standard-network/statistics');
  }

  getLeader(id: number) {
    return this.http.get<{ department: Department, staff: Staff }>(`/api/standard-network/${id}/leader`);
  }

  setLeader(id: number, staffId: number) {
    return this.http.patch(`/api/standard-network/${id}/leader`, { staffId });
  }


}
