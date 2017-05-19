import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class ExperienceService {
  private _experience: Observable<any[]>;
  constructor(private _afd: AngularFireDatabase) {
    this._experience = this._afd.list('/experience');
  }
  get experience(): Observable<any[]> {
    return this._experience;
  }
}
