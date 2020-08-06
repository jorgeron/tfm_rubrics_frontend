import { Entity } from './entity.model';
import { Area } from './area.model';
import { LevelDescriptor } from './level-descriptor.model';

export class Competence extends Entity {

    area: Area;
    areaId: string;
    name: string;
    proficiencyLevels: LevelDescriptor[];

    constructor() {
        super();
    }
}
