import { Post } from '../posts/post';
import { Staff } from '../staff/staff';
export class Department {
  id: number;
  name: string;
  abbr: string;
  responsibilities: string; // 部门职责描述
  remark: string;
  leader: Staff;
  index: number;
  posts: Post[];
  parent: Department;
  children: Department[];

  postCount: number = 0;
  staffCount: number = 0;
}
