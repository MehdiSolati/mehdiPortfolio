import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NGMeta } from 'ngmeta';

import { CommunityService } from '../shared/services/community.service';

@Component({
  moduleId: module.id,
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  constructor(private _cs: CommunityService, private _ngmeta: NGMeta) { }

  ngOnInit() {
    this._ngmeta.title = 'Community | Michael Solati 👨‍💻☕🍺';
  }

  get communities(): Observable<any> {
    return this._cs.communities;
  }
}
