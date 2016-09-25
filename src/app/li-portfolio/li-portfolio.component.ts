import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-li-portfolio',
    templateUrl: './li-portfolio.component.html',
    styleUrls: ['./li-portfolio.component.scss']
})
export class LIPortfolioComponent implements OnInit {
    @Input() details: Object;
    constructor(private sanitizer: DomSanitizer) {

    }

    ngOnInit() {

    }

    private sanitizeImage(image: string) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    }

}
