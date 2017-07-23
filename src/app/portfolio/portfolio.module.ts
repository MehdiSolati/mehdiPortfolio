import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PortfolioComponent }
    ]),
    SharedModule
  ],
  declarations: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
