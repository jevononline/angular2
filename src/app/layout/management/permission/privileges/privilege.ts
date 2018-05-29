
export class Privilege {
  id: number;
  name: string;

  parent: Privilege;
  children: Privilege[];
}
