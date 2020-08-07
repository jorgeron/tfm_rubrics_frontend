import { Entity } from './entity.model';
import { LevelDescriptor } from './level-descriptor.model';

export class Score extends Entity {

    competenceId: string;
    competenceName: string;
    proficiencyLevel: LevelDescriptor;

    constructor() {
        super();
    }
}
