import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Experience } from '../interfaces/experience';

@Injectable()
export class DetailsService {
    private communityData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private communityJSON: string = './assets/jsons/community.json';
    private educationData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private educationJSON: string = './assets/jsons/education.json';
    private workData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);
    private workJSON: string = './assets/jsons/work.json';

    constructor(private http: Http) {
        this.load();
    }

    private load() {
        this.http.get(this.workJSON)
            .map(this.extractResponse)
            .catch(this.handleError)
            .subscribe(work => {
                this.workData.next(work);
            });

        this.http.get(this.educationJSON)
            .map(this.extractResponse)
            .catch(this.handleError)
            .subscribe(education => {
                this.educationData.next(education);
            });

        this.http.get(this.communityJSON)
            .map(this.extractResponse)
            .catch(this.handleError)
            .subscribe(community => {
                this.communityData.next(community);
            });
    }

    private extractResponse(res: Response) {
        let body = res.json();
        return body || {};
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

    private handleError(error: any) {
        console.log(error);
        return Observable.throw('Some Error');
    }
}
