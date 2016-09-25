import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DetailsService } from './shared/services/details.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioSkillsComponent } from './portfolio-skills/portfolio-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { LIDetailComponent } from './li-detail/li-detail.component';
import { LISkillComponent } from './li-skill/li-skill.component';
import { LIPortfolioComponent } from './li-portfolio/li-portfolio.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutMeComponent,
        PortfolioSkillsComponent,
        ExperienceComponent,
        FooterComponent,
        LIDetailComponent,
        LISkillComponent,
        LIPortfolioComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        DetailsService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
