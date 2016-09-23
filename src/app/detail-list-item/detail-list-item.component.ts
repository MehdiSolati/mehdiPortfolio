import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-detail-list-item',
    templateUrl: './detail-list-item.component.html',
    styleUrls: ['./detail-list-item.component.css']
})
export class DetailListItemComponent implements OnInit {
    @Input() detail: Object;
    constructor() {
    }

    ngOnInit() {
    }
}
