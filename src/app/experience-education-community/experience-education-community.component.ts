import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DetailsService } from '../shared/services/details.service';
import { Experience } from '../shared/interfaces/experience';

@Component({
    selector: 'app-experience-education-community',
    templateUrl: './experience-education-community.component.html',
    styleUrls: ['./experience-education-community.component.css']
})
export class ExperienceEducationCommunityComponent implements OnInit, OnDestroy {
    private workSub: Subscription;
    private workExperiences: Array<Experience> = [];
    constructor(private detailsService: DetailsService) {

    }

    ngOnInit() {
        this.workSub = this.detailsService.getWorkObservable().subscribe((value) => {
            this.workExperiences = value;
        });
    }

    ngOnDestroy() {
        this.workSub.unsubscribe();
    }

}
