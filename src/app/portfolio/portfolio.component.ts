import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { NGMeta } from 'ngmeta';

import { PortfolioService } from '../shared/services/portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor(private _ps: PortfolioService, private _sanitizer: DomSanitizer, private _ngmeta: NGMeta) { }

  ngOnInit() {
    this._ngmeta.title = 'Portfolio | Michael Solati 👨‍💻☕🍺';
  }

  get portfolio(): Observable<any> {
    return this._ps.portfolio;
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle('url(' + image + ')');
  }
}
