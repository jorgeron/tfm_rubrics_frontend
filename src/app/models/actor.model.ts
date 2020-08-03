import { Entity } from './entity.model';

export class Actor extends Entity {

    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
    customToken: string;

    constructor() {
        super();
    }
}
