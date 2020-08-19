import { Entity } from './entity.model';

export class Student extends Entity {

    name: string;
    surname: string;
    email: string;
    course: string;

    constructor() {
        super();
    }
}
