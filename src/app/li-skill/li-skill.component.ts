import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-li-skill',
    templateUrl: './li-skill.component.html',
    styleUrls: ['./li-skill.component.scss']
})
export class LISkillComponent implements OnInit {
    @Input() details: Object;

    constructor() {

    }

    ngOnInit() {

    }

}
