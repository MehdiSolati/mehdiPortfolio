import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Experience } from '../interfaces/experience';
import { PortfolioSkills } from '../interfaces/portfolio-skills';
import { communityExperience } from './details/community';
import { educationExperience } from './details/education';
import { portfolioList } from './details/portfolio';
import { skillsList } from './details/skills';
import { workExperience } from './details/work';

@Injectable()
export class DetailsService {
    private communityData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private educationData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private portfolioData: BehaviorSubject<Array<PortfolioSkills>> = new BehaviorSubject<Array<PortfolioSkills>>([]);
    private skillsData: BehaviorSubject<Array<PortfolioSkills>> = new BehaviorSubject<Array<PortfolioSkills>>([]);
    private workData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);

    constructor() {
        this.communityData.next(<Array<Experience>>(communityExperience));
        this.educationData.next(<Array<Experience>>(educationExperience));
        this.portfolioData.next(<Array<PortfolioSkills>>(portfolioList));
        this.skillsData.next(<Array<PortfolioSkills>>(skillsList));
        this.workData.next(<Array<Experience>>(workExperience));
    }

    public getCommunityObservable() {
        return this.communityData;
    }

    public getEducationObservable() {
        return this.educationData;
    }

    public getPortfolioObservable() {
        return this.portfolioData;
    }

    public getSkillsObservable() {
        return this.skillsData;
    }

    public getWorkObservable() {
        return this.workData;
    }
}
