import { RegulationCategory } from './regulation-categories/regulation-category';
import { Department } from '../management/org/departments/department';

export class Regulation {
  id: number;
  category: RegulationCategory;
  documentNo: string;
  documentName: string;
  replacingDocumentNos: string[];
  department: Department;
  file: FileTicket;
  issuer: string;
  executeDate: Date;
  remark: string;
}
