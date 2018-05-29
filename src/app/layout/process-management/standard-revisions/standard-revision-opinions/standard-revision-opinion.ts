
import { User } from '../../../management/permission/users/user';
import { Resource } from '../../resources/resource';
export class StandardRevisionOpinion implements Resource {
  resourceId: number;

  content: string;

  createdBy: User;
  createdAt: Date;

}
