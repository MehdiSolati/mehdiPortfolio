import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    year: number = 2016;
    constructor() {
        this.year = new Date().getFullYear();
    }

    ngOnInit() {
    }

}
