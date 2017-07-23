import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NGMeta } from 'ngmeta';

import { ExperienceService } from '../shared/services/experience.service';

@Component({
  moduleId: module.id,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  constructor(private _exps: ExperienceService, private _ngmeta: NGMeta) { }

  ngOnInit() {
    this._ngmeta.title = 'Experience | Michael Solati 👨‍💻☕🍺';
  }

  get experiences(): Observable<any> {
    return this._exps.experiences;
  }
}
