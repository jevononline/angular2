import { Department } from '../management/org/departments/department';

export class SuperiorDocument {
  id: number;
  documentNo: string;
  documentName: string;
  replacingDocumentNos: string[];
  department: Department;

  timeSpan: number[];
  issuer: string;
  executeDate: Date;
  files: FileTicket[] = [];
  remark: string;
}
