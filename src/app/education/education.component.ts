import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EducationService } from '../shared/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educations: Observable<any[]>;
  constructor(private _eduService: EducationService) { }

  ngOnInit() {
    this.educations = this._eduService.educations;
  }
}
