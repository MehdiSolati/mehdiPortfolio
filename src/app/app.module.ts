import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'hammerjs';

import { environment } from '../environments/environment';

import { ExperienceService } from './shared/services/experience.service';
import { PortfolioService } from './shared/services/portfolio.service';
import { SkillsService } from './shared/services/skills.service';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PortfolioComponent,
    SkillsComponent,
    ExperienceComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ExperienceService,
    PortfolioService,
    SkillsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private _eService: ExperienceService, private _pService: PortfolioService, private _sService: SkillsService) { }
}
