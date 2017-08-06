import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { NGMeta } from 'ngmeta';

import { MediumService } from '../shared/services/medium.service'

@Component({
  moduleId: module.id,
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private _ms: MediumService, private _sanitizer: DomSanitizer, private _ngmeta: NGMeta) { }

  ngOnInit() {
    this._ngmeta.title = 'Articles | Michael Solati 👨‍💻☕🍺';
  }

  get posts(): Observable<any[]> {
    return this._ms.posts;
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle('url(' + image + ')');
  }
}
