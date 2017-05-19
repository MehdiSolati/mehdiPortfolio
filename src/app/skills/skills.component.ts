import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { SkillsService } from '../shared/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: Observable<any[]>;
  constructor(private _sService: SkillsService) { }

  ngOnInit() {
    this.skills = this._sService.skills;
  }
}
