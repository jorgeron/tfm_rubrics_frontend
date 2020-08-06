import { Entity } from './entity.model';

export class LevelDescriptor extends Entity {

    level: number;
    descriptor: string;

    constructor() {
        super();
    }
}
