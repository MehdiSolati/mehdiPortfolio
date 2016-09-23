import { BrowserModule } from '@angular/platform-browser';
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
import { DetailListItemComponent } from './detail-list-item/detail-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutMeComponent,
        PortfolioSkillsComponent,
        ExperienceComponent,
        FooterComponent,
        DetailListItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [DetailsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
