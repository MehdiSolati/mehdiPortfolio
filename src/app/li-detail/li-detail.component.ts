import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-li-detail',
    templateUrl: './li-detail.component.html',
    styleUrls: ['./li-detail.component.css']
})
export class LIDetailComponent implements OnInit {
    @Input() details: Object;
    constructor() {
    }

    ngOnInit() {
    }
}
