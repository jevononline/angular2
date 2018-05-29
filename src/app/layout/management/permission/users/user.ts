
import { Staff } from '../../org/staff/staff';
import { Role } from '../roles/role';
export class User {
  id: number;
  loginId: string;
  password: string;
  isEnabled: boolean = true;
  roles: Role[];
  staff: Staff;
  charge: number[];
}
