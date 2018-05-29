import { User } from '../users/user';
import { Privilege } from '../privileges/privilege';

export class Role {
  id: number;
  name: string;
  privileges: Privilege[];
  createdAt: Date;
  createdBy: User;
}
