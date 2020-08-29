import { Entity } from './entity.model';

export class Activity extends Entity {

    title: string;
    course: string;

    constructor() {
        super();
    }
}
