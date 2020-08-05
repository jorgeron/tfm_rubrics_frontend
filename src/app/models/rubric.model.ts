import { Entity } from './entity.model';

/** Constants used to fill up our data base. */
const COMPETENCES: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export class Rubric extends Entity {

    name: string;
    description: string;

    constructor() {
        super();
    }

    /** Builds and returns a new Rubric. */
    createNewRubric(num: number): Rubric {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    const rubric = new Rubric();
    rubric.id = num.toString();
    rubric.version = 1;
    rubric.name = name;
    rubric.description = Math.round(Math.random() * 100).toString();

    return rubric;

}
}
