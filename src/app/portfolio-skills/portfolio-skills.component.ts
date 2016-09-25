import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DetailsService } from '../shared/services/details.service';
import { PortfolioSkills } from '../shared/interfaces/portfolio-skills';

@Component({
    selector: 'app-portfolio-skills',
    templateUrl: './portfolio-skills.component.html',
    styleUrls: ['./portfolio-skills.component.css']
})
export class PortfolioSkillsComponent implements OnInit, OnDestroy {
    private portfolioList: Array<PortfolioSkills> = [];
    private portfolioSub: Subscription;
    private skillsList: Array<PortfolioSkills> = [];
    private skillsSub: Subscription;

    constructor(private detailsService: DetailsService) {

    }

    ngOnInit() {
        this.portfolioSub = this.detailsService.getPortfolioObservable().subscribe((value) => {
            this.portfolioList = value;
        });
        this.skillsSub = this.detailsService.getSkillsObservable().subscribe((value) => {
            this.skillsList = value;
        });
    }

    ngOnDestroy() {
        this.portfolioSub.unsubscribe();
        this.skillsSub.unsubscribe();
    }
}
