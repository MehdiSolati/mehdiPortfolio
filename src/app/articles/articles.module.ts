import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'

import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ArticlesComponent }
    ])
  ],
  declarations: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
