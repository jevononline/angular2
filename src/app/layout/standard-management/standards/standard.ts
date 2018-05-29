import { Department } from '../../management/org/departments/department';
import { User } from '../../management/permission/users/user';
import { StandardSystem } from '../../system-management/standard-system/standard-system';
import { StandardAdoption } from './standard-adoptions/standard-adoption';

export class BaseStandard {

  standardSystem: StandardSystem;
  department: Department;
  drafter: User;

  publishDate: Date;
  executeDate: Date;

  mainFile: any;
  flowChartFiles: any;
  reportFiles: any;

}

export class Standard extends BaseStandard {
  standardCode: string;
  id: number;
  standardNo: string;
  name: string;
  categoryValue: number;

  adoptions?: StandardAdoption[] = [];
  replacingStandards?: Standard[] = [];

  remark: string;

  // 下载时使用，合并 mainFile，flowChartFiles，reportFiles
  files: FileTicket[];
}