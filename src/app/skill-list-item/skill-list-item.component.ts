import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-skill-list-item',
    templateUrl: './skill-list-item.component.html',
    styleUrls: ['./skill-list-item.component.scss']
})
export class SkillListItemComponent implements OnInit {
    @Input() skill: Object;

    constructor() {

    }

    ngOnInit() {

    }

}
