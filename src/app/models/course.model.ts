import { User } from './user.model';

export class Course {
  id: string;
  name: string;
  holes: Hole[];

  constructor(name: string, holes: Hole[], id?: string) {
    this.name = name;
    this.holes = holes;
    this.id = id ? id : '';
    //
  }
}

export class Hole {
  par: number;
  yards: number;

  constructor(par: number, yards: number) {
    this.par = par;
    this.yards = yards;
  }
}
