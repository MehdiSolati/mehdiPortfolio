import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ExperienceComponent } from './experience.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ExperienceComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
