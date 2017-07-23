import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
declare var window: any;

@Injectable()
export class ExperienceService {
  private _experiences: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private _zone: NgZone) {
    if (typeof window !== 'undefined') {
      this._query();
    }
  }

  get experiences(): Observable<any[]> {
    return this._experiences.asObservable();
  }

  private _query(): void {
    firebase
      .database()
      .ref('experience')
      .on('value', (snapshot: any) => {
        const query: any[] = snapshot.val();
        this._zone.run(() => {
          this._experiences.next(query);
        });
      });
  }
}
