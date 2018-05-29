import { GuidelineCategory } from './guideline-categories/guideline-category';
export class Guideline {
  id: number;
  title: string;
  category: GuidelineCategory;
  timeSpan: number[]; // [1,2017] 2017年度 [3,2017,2] 2017年第2季度 [5,2017,10] 2017年10月
  content: string;
}
