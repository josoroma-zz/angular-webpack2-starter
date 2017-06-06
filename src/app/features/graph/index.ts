import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './routing';

import { MaterialModule } from '@angular/material';

import { GraphActions } from './actions';

import { GraphComponent } from './component';

import { EffectsModule } from '@ngrx/effects';

import { GraphEffects } from './effects';

import { GraphPostsService } from './graph.posts.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    EffectsModule.run(GraphEffects)
  ],
  declarations: [
    GraphComponent
  ],
  providers: [
    GraphActions,
    GraphPostsService
  ]
})

export class GraphModule { }
