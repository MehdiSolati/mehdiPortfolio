import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() image: string;
  @Input() link: string;
  @Input() subtitle: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
