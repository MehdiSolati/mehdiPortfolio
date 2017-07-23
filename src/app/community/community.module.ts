import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CommunityComponent } from './community.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CommunityComponent }
    ]),
    SharedModule
  ],
  declarations: [
    CommunityComponent
  ]
})
export class CommunityModule { }
