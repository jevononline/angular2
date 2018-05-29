import { Standard, BaseStandard } from '../../standard-management/standards/standard';
import { Department } from '../../management/org/departments/department';
import { Resource } from '../resources/resource';

export class StandardRevision extends BaseStandard implements Resource {
  resourceId: number;

  revisionType: number; //编制类型 1:新建 2:修订 3:废弃
  finishTime: Date; //完成时间
  preparationNote?: FileTicket;

  riskPoint: string;
  assistingDepartments: Department[];
  solicitedDepartments: Department[];
  referenceStandardIds: number[] = [];

  standard: Standard = new Standard();// 用到standard的standardNo和name
}