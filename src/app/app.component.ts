import { Component } from '@angular/core';
import { DetailsService } from './shared/services/details.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private detailsService: DetailsService) {

    }
}
