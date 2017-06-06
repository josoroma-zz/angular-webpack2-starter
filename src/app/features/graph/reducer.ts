import { Store, Action } from '@ngrx/store';

import { AppState, createNewRootReducer } from './../../reducers/index';

import { GraphState } from './model';

// Action types currently handled by the `graphReducer`.
import { GraphActions } from './actions';

import {
  reducerGetPosts,
  reducerGetPostsSuccess,
  reducerGetPostsFail
} from './reducer.get.posts';

const initialState: GraphState = {
  data: null,
  isFetching: false,
  error: null
};

/**
 * graphReducer will be used to accumulate value through iteration, is a
 * specific slice of the state.
 * @param  state    the current state for that state slice (accumulator).
 * @param  action   the action being dispatched.
 * @return state    the new representation of the state.
 */
export const graphReducer = (state: GraphState = initialState, action: Action) => {
  let actions = {
    [GraphActions.GET_POSTS]: reducerGetPosts(state, action),
    [GraphActions.GET_POSTS_SUCCESS]: reducerGetPostsSuccess(state, action),
    [GraphActions.GET_POSTS_FAIL]: reducerGetPostsFail(state, action)
  };

  /**
   * If the reducer is registered to handle this `action.type`, the appropriate
   * state calculation will be performed and a new representation of the state
   * wil be returned (if not, the current state will be returned back).
   */
  return actions[action.type] || state;
};

export interface AppStateWithGraph extends AppState {
  graph: GraphState;
}

export class StoreWithGraph extends Store<AppStateWithGraph> { }

export const graphStoreFactory = (appStore: Store<AppState>) => {
  appStore.replaceReducer(
    createNewRootReducer({
      graph: graphReducer
    })
  );

  return appStore;
};
