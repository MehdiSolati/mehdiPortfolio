import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience } from '../interfaces/experience';

@Injectable()
export class DetailsService {
    private workJSON: string = './assets/jsons/work.json';
    private workData: BehaviorSubject<Array<Experience>> = new BehaviorSubject<Array<Experience>>([]);

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
    }

    private extractResponse(res: Response) {
        let body = res.json();
        return body || {};
    }

    public getWorkObservable() {
        return this.workData;
    }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw('Some Error');
    }
}
