import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommunityService } from '../shared/services/community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  public communities: Observable<any[]>;
  constructor(private _commService: CommunityService) { }

  ngOnInit() {
    this.communities = this._commService.communities;
  }
}
