import { Staff } from '../../management/org/staff/staff';
export class StandardCommittee {
  id: number;
  name: string;
  tag: number;
  responsibilities: string; // 部门职责描述

  leader: Staff;
  index: number;

  parent: StandardCommittee;
  children: StandardCommittee[];

  staffCount: number;
}

