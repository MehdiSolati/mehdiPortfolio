import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DetailsService } from '../shared/services/details.service';
import { Skills } from '../shared/interfaces/skills';

@Component({
    selector: 'app-portfolio-skills',
    templateUrl: './portfolio-skills.component.html',
    styleUrls: ['./portfolio-skills.component.css']
})
export class PortfolioSkillsComponent implements OnInit, OnDestroy {
    private skillsList: Array<Skills> = [];
    private skillsSub: Subscription;

    constructor(private detailsService: DetailsService) {

    }

    ngOnInit() {
        this.skillsSub = this.detailsService.getSkillsObservable().subscribe((value) => {
            this.skillsList = value;
        });
    }

    ngOnDestroy() {
        this.skillsSub.unsubscribe();
    }
}
