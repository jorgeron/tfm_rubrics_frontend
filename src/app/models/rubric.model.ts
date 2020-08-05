import { Entity } from './entity.model';

export class Rubric extends Entity {

    name: string;
    description: string;
    teacher: string;

    constructor() {
        super();
    }
}
