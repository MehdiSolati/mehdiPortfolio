import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NGMeta } from 'ngmeta';

import { EducationService } from '../shared/services/education.service';

@Component({
  moduleId: module.id,
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  constructor(private _edus: EducationService, private _ngmeta: NGMeta) { }

  ngOnInit() {
    this._ngmeta.title = 'Education | Michael Solati 👨‍💻☕🍺';
  }

  get educations(): Observable<any> {
    return this._edus.educations;
  }
}
