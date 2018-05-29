import { StandardCommittee } from '../../standard-system-org-management/standard-committee/standard-committee';
import { Standard } from '../../standard-management/standards/standard';
export class StandardSystem {
  id: number;
  structureNo: string;
  name: string;

  standardCommittee: StandardCommittee;

  remark: string;

  level: number;
  index: number;

  standards: Standard[];

  parent: StandardSystem;
  children: StandardSystem[];
  standardCount: number;
}
