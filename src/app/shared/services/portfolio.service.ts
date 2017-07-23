import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
declare var window: any;

@Injectable()
export class PortfolioService {
  private _portfolio: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private _zone: NgZone) {
    if (typeof window !== 'undefined') {
      this._query();
    }
  }

  get portfolio(): Observable<any[]> {
    return this._portfolio.asObservable();
  }

  private _query(): void {
    firebase
      .database()
      .ref('portfolio')
      .on('value', (snapshot: any) => {
        const query: any[] = snapshot.val();
        this._zone.run(() => {
          this._portfolio.next(query);
        });
      });
  }
}
