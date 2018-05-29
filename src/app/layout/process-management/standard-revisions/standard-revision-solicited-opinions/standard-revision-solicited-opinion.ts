

import { User } from '../../../management/permission/users/user';
import { Resource } from '../../resources/resource';
export class StandardRevisionSolicitedOpinion implements Resource {
  resourceId: number;

  pointer: string;
  src: string;
  content: string;
  remark: string;

  adopted: boolean;
  adoptedReason: string;

  createdBy: User;
  createdAt: Date;

}
