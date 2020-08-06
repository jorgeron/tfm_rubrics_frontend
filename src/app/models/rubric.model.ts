import { Entity } from './entity.model';
import { Competence } from './competence.model';

export class Rubric extends Entity {

    name: string;
    description: string;
    competences: Competence[];
    teacher: string;

    constructor() {
        super();
    }
}
