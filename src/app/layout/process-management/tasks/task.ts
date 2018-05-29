

export class Task {

  id: string;

  assignee: string;
  delegationState: null | 'pending' | 'resolved';

  name: string;

  businessInstance: { id: number, name: string };
  processDefinitionId: string;
  processInstanceId: string;
  processInstanceName: string;
  taskDefinitionKey: string;
  // setReceivingDepartment

  executionId: string;

  variables: { name: string, type: string, value: any }[];

  data: any;

  createTime: Date;
  endTime: Date;
}
