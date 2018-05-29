
import { User } from '../../management/permission/users/user';

export class Process {
  id: number;
  name: string;
  type: number;

  data: any;

  isCompleted: boolean;

  createdAt: Date;
  createdBy: User;
}
