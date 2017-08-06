import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class MediumService {
  private _posts: Observable<any[]>;
  private _rssToJson: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(private _http: Http) {
    this._posts = this._load(environment.medium);
  }

  get posts(): Observable<any[]> {
    return this._posts;
  }

  private _handleError(error: any): Observable<any> {
    return Observable.throw(error.message);
  }


  private _load(medium: string): Observable<any[]> {
    return this._http.get(this._rssToJson + medium)
      .map((res: Response) => {
        const body: any = res.json();
        let posts = (body.items || []);
        const processed: any[] = this._processPosts(posts);
        if (processed.length > 11) {
          return processed.splice(0, 12);
        }
        return processed;
      })
      .catch(this._handleError);
  }

  private _processPosts(posts: any[]): any[] {
    const processed: any[] = posts.filter((post: any) => {
      if (post.categories.length === 0) return;
      post['image'] = this._stripImage(post.description);
      post['description'] = this._stripHTML(post.description);
      return post;
    });
    return processed;
  }

  private _stripHTML(preview: string): string {
    return preview.replace(/<(?:.|\n)*?>/gm, '');
  }

  private _stripImage(preview: string): string {
    const imgTags: string[] = preview.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
    if (imgTags && imgTags.length > 0) {
      let img: string = imgTags[0];
      return img.replace(/.*src="([^"]*)".*/, '$1');
    }
  }
}
