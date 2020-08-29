import { Entity } from './entity.model';
import { Score } from './score.model';

export class Assessment extends Entity {

    rubricId: string;
    student: string;
    activity: string;
    scores: Score[];
    comment: string;

    constructor() {
        super();
    }
}
