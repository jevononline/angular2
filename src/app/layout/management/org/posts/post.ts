import { Department } from '../departments/department';
import { Staff } from '../staff/staff';
import { Standard } from '../../../standard-management/standards/standard';
export class Post {
  id: number;
  name: string;
  department: Department;
  isDisabled: boolean = false;
  description: string;

  staff: Staff[];

  staffCount: number;

  standards: Standard[];
}
