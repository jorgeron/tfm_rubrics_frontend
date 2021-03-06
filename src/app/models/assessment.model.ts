import { Activity } from './activity.model';
import { Entity } from './entity.model';
import { Score } from './score.model';

export class Assessment extends Entity {

    rubric: string;
    student: string;
    activity: Activity;
    scores: Score[];
    comment: string;

    constructor() {
        super();
    }
}
