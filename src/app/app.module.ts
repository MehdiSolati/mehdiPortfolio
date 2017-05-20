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

import { CommunityService } from './shared/services/community.service';
import { EducationService } from './shared/services/education.service';
import { ExperienceService } from './shared/services/experience.service';
import { PortfolioService } from './shared/services/portfolio.service';
import { SkillsService } from './shared/services/skills.service';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { CommunityComponent } from './community/community.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PortfolioComponent,
    SkillsComponent,
    ExperienceComponent,
    ContentCardComponent,
    CommunityComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'michaelsolati'}),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    CommunityService,
    EducationService,
    ExperienceService,
    PortfolioService,
    SkillsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private _commService: CommunityService, private _eduService: EducationService, private _expService: ExperienceService, private _pService: PortfolioService, private _sService: SkillsService) { }
}
