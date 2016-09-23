import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Experience } from '../interfaces/experience';
import { communityExperience } from './details/community';
import { educationExperience } from './details/education';
import { workExperience } from './details/work';

@Injectable()
export class DetailsService {
    private communityData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private educationData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private workData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);

    constructor() {
        this.communityData.next(<Array<Experience>>(communityExperience));
        this.educationData.next(<Array<Experience>>(educationExperience));
        this.workData.next(<Array<Experience>>(workExperience));
    }

    public getCommunityObservable() {
        return this.communityData;
    }

    public getEducationObservable() {
        return this.educationData;
    }

    public getWorkObservable() {
        return this.workData;
    }
}
