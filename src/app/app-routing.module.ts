import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: 'app/home/home.module#HomeModule'
}, {
  path: 'articles',
  loadChildren: 'app/articles/articles.module#ArticlesModule'
}, {
  path: 'education',
  loadChildren: 'app/education/education.module#EducationModule'
}, {
  path: 'experience',
  loadChildren: 'app/experience/experience.module#ExperienceModule'
}, {
  path: 'portfolio',
  loadChildren: 'app/portfolio/portfolio.module#PortfolioModule'
}, {
  path: '**',
  redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
