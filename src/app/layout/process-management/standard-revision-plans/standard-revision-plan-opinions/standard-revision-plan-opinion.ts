
import { User } from '../../../management/permission/users/user';
import { Resource } from '../../resources/resource';
export class StandardRevisionPlanOpinion implements Resource {
  resourceId: number;

  content: string;
  reason: string;
  createdBy: User;
  createdAt: Date;

  adopted?: boolean;
  adoptedReason?: string;
  // adoptedBy?: User;
}
