import { Entity } from './entity.model';

export class Course extends Entity {

    name: string;
    description: string;
    room: string;
    teacher: string;

    constructor() {
        super();
    }
}
