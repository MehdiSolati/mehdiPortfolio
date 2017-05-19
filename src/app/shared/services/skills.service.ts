import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class SkillsService {
  private _skills: Observable<any[]>;
  constructor(private _afd: AngularFireDatabase) {
    this._skills = this._afd.list('/skills');
  }
  get skills(): Observable<any[]> {
    return this._skills;
  }
}
