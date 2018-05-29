import { Staff } from '../../management/org/staff/staff';

export class SystemOrgTicket {
  id: number;
  systemOrgTag: number;
  systemOrgId: number; // 所属的组织id，比如department id
  staff: Staff;
  content: any;
}
