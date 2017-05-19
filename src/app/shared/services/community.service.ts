import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class CommunityService {
  private _communities: Observable<any[]>;
  constructor(private _afd: AngularFireDatabase) {
    this._communities = this._afd.list('/community');
  }
  get communities(): Observable<any[]> {
    return this._communities;
  }
}
