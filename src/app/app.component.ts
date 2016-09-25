import { Component, ViewEncapsulation } from '@angular/core';
import { DetailsService } from './shared/services/details.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(private detailsService: DetailsService) {

    }
}
