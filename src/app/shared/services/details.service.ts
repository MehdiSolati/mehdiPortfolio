import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Experience } from '../interfaces/experience';
import { Skills } from '../interfaces/skills';
import { communityExperience } from './details/community';
import { educationExperience } from './details/education';
import { skillsList } from './details/skills';
import { workExperience } from './details/work';

@Injectable()
export class DetailsService {
    private communityData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private educationData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private skillsData: BehaviorSubject<Array<Skills>> = new BehaviorSubject<Array<Skills>>([]);
    private workData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);

    constructor() {
        this.communityData.next(<Array<Experience>>(communityExperience));
        this.educationData.next(<Array<Experience>>(educationExperience));
        this.skillsData.next(<Array<Skills>>(skillsList));
        this.workData.next(<Array<Experience>>(workExperience));
    }

    public getCommunityObservable() {
        return this.communityData;
    }

    public getEducationObservable() {
        return this.educationData;
    }

    public getSkillsObservable() {
        return this.skillsData;
    }

    public getWorkObservable() {
        return this.workData;
    }
}
