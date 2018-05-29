import { Department } from '../../../management/org/departments/department';
import { StandardCategory } from '../standard-category/standard-category';

export class StandardAdvancedFilter {
  departments: Department[];
  publishStartDate: Date;
  publishEndDate: Date;
  executeStartDate: Date;
  executeEndDate: Date;
  categoryValues: number[]; // 存的是standard category value数组
}

export class StandardAdvancedFilterSerialized {
  departments: number[] | undefined;
  publishStartDate: string | undefined;
  publishEndDate: string | undefined;
  executeStartDate: string | undefined;
  executeEndDate: string | undefined;
  categoryValues: number[] | undefined;
}