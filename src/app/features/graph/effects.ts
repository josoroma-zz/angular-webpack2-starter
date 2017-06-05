import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';

import { GraphActions } from './actions';

import { GraphPostsService } from './graph.posts.service';

@Injectable()
export class GraphEffects {
  constructor(
    private graphPostsService: GraphPostsService,
    private actions$: Actions,
    private graphActions: GraphActions
  ) { }

  @Effect() posts$ = this.actions$
    .ofType(GraphActions.GET_POSTS)
    .map(action => action.payload)
    .switchMap(() => this.graphPostsService.getPosts()
      .mergeMap((res: any) => Observable.of(
        this.graphActions.getPostsSuccess(res)
      ))
      .catch((err) => Observable.of(
        this.graphActions.getPostsFail(err)
      ))
    );
}
