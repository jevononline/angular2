import { Post } from '../posts/post';
import { User } from '../../permission/users/user';

export class Staff {
  id: number;
  staffNo: string;
  fullName: string;
  email: string;
  mobile: string;
  remark: string;
  status: number = 1;
  posts: Post[];

  user: User;
}
