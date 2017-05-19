import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { PortfolioService } from '../shared/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public portfolio: Observable<any[]>;
  constructor(private _pService: PortfolioService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.portfolio = this._pService.portfolio;
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}