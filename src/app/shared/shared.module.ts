import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NGMeta } from 'ngmeta';

import { CommunityService } from './services/community.service';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { PortfolioService } from './services/portfolio.service';

import { NavbarComponent } from './navbar/navbar.component';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  providers: [
    NGMeta,
    CommunityService,
    EducationService,
    ExperienceService,
    PortfolioService
  ],
  declarations: [
    NavbarComponent,
    ContentCardComponent
  ],
  exports: [
    NavbarComponent,
    ContentCardComponent
  ]
})
export class SharedModule {
  constructor(
    private _cs: CommunityService,
    private _edus: EducationService,
    private _exps: ExperienceService,
    private _ps: PortfolioService
  ) { }

  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
