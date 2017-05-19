import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioService {
  private _portfolio: Observable<any[]>;
  constructor(private _afd: AngularFireDatabase) {
    this._portfolio = this._afd.list('/portfolio');
  }
  get portfolio(): Observable<any[]> {
    return this._portfolio;
  }
}
