import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DetailsService } from '../shared/services/details.service';
import { Experience } from '../shared/interfaces/experience';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
    private communityExperiences: Array<Experience> = [];
    private communitySub: Subscription;
    private educationExperiences: Array<Experience> = [];
    private educationSub: Subscription;
    private workExperiences: Array<Experience> = [];
    private workSub: Subscription;
    constructor(private detailsService: DetailsService) {

    }

    ngOnInit() {
        this.communitySub = this.detailsService.getCommunityObservable().subscribe((value) => {
            this.communityExperiences = value;
        });
        this.educationSub = this.detailsService.getEducationObservable().subscribe((value) => {
            this.educationExperiences = value;
        });
        this.workSub = this.detailsService.getWorkObservable().subscribe((value) => {
            this.workExperiences = value;
        });
    }

    ngOnDestroy() {
        this.communitySub.unsubscribe();
        this.educationSub.unsubscribe();
        this.workSub.unsubscribe();
    }

}
