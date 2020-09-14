import { Entity } from './entity.model';
import { Competence } from './competence.model';
import { Activity } from './activity.model';

export class Rubric extends Entity {

    name: string;
    description: string;
    competences: Competence[];
    teacher: string;
    activities: Activity[];

    constructor() {
        super();
    }
}
