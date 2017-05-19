import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ExperienceService } from '../shared/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experiences: Observable<any[]>;
  constructor(private _expService: ExperienceService) { }

  ngOnInit() {
    this.experiences = this._expService.experience;
  }
}
