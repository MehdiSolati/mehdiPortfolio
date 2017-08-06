import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgServiceWorker, ServiceWorkerModule } from '@angular/service-worker';
import { NGMeta } from 'ngmeta';
import * as firebase from 'firebase';

import { environment } from '../../environments/environment';

import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { MediumService } from './services/medium.service';
import { PortfolioService } from './services/portfolio.service';

import { NavbarComponent } from './navbar/navbar.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';

firebase.initializeApp(environment.firebase);

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpModule,
    RouterModule,
    ServiceWorkerModule
  ],
  providers: [
    NGMeta,
    EducationService,
    ExperienceService,
    MediumService,
    PortfolioService
  ],
  declarations: [
    NavbarComponent,
    ContentCardComponent,
    TruncatePipe
  ],
  exports: [
    NavbarComponent,
    ContentCardComponent,
    TruncatePipe
  ]
})
export class SharedModule {
  constructor(
    private _edus: EducationService,
    private _exps: ExperienceService,
    private _ms: MediumService,
    private _ngmeta: NGMeta,
    private _ps: PortfolioService,
    private _sw: NgServiceWorker
  ) {
    this._ngmeta.scrollEnabled = true;

    if (environment.applicationServerKey) {
      this._sw.registerForPush({
        applicationServerKey: environment.applicationServerKey
      }).subscribe((sub: any) => {
        // Use details to register on your server to send notifications to this device
        console.log(sub);
      });
      this._sw.push.subscribe((msg: any) => {
        // Handle message when in app
        console.log(msg);
      });
    }
  }

  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
