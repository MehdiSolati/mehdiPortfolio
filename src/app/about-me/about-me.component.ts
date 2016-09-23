import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
    private punchLine: string = '';
    private punchLines: Array<string> = [
        '// A pirate trying to write epic code!',
        'Cirrus, alto cumulus, cirrostratus. Yea, I speak cloud. No biggie.',
        'Java is a language... Not a hot drink!'
    ];
    constructor() { }

    ngOnInit() {
        this.setPunchLine();
    }

    private setPunchLine() {
        let quote = this.punchLines[Math.floor(Math.random() * this.punchLines.length)];
        this.punchLine = quote;
    }
}
