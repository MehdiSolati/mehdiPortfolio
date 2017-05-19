import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class EducationService {
  private _educations: Observable<any[]>;
  constructor(private _afd: AngularFireDatabase) {
    this._educations = this._afd.list('/education');
  }
  get educations(): Observable<any[]> {
    return this._educations;
  }
}
