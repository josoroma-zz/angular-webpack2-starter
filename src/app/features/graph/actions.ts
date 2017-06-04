/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Action } from '@ngrx/store';

/**
 * Definitions of the actions that will be dispatched to alter the state.
 * We should modify the state within our store application by dispatching
 * these actions.
 */
@Injectable()
export class GraphActions {

  static GET_POSTS = '[Graph] GET_POSTS';
  getPosts(): Action {
    return {
      type: GraphActions.GET_POSTS
    };
  }

  static GET_POSTS_SUCCESS = '[Graph] GET_POSTS_SUCCESS';
  getPostsSuccess(res): Action {
    return {
      type: GraphActions.GET_POSTS_SUCCESS,
      payload: res
    };
  }

  static GET_POSTS_FAIL = '[Graph] GET_POSTS_FAIL';
  getPostsFail(err: Error): Action {
    return {
      type: GraphActions.GET_POSTS_FAIL,
      payload: err
    };
  }
}
