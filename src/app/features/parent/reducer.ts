import { Store, Action } from '@ngrx/store';

import { AppState, createNewRootReducer } from './../../reducers/index';

// Action types currently handled by the `parentReducer`.
import { ParentActions } from './actions';
import { reducerDecrement } from './reducer.decrement';
import { reducerIncrement } from './reducer.increment';
import { reducerReset } from './reducer.reset';

// Action types currently handled by the `childReducer`.
import { ChildActions } from './child/actions';
// `childReducer` will be used to accumulate value through iteration.
import { ChildState, childReducer } from './child/reducer';

export interface ParentState {
  counter: number;
};

const initialState: ParentState = {
  counter: 0
};

/**
 * parentReducer will be used to accumulate value through iteration, is a
 * specific slice of the state.
 * @param  state    the current state for that state slice (accumulator).
 * @param  action   the action being dispatched.
 * @return state    the new representation of the state.
 */
export const parentReducer = (state: ParentState = initialState, action: Action) => {
  let actions = {
    [ParentActions.DECREMENT]: reducerDecrement(state),
    [ParentActions.INCREMENT]: reducerIncrement(state),
    [ParentActions.RESET]: reducerReset(state)
  };

  /**
   * If the reducer is registered to handle this `action.type`, the appropriate
   * state calculation will be performed and a new representation of the state
   * wil be returned (if not, the current state will be returned back).
   */
  return actions[action.type] || state;
};

export interface AppStateWithParent extends AppState {
  parent: ParentState;
  child: ChildState;
};

export class StoreWithParent extends Store<AppStateWithParent> { }

export const parentStoreFactory = (appStore: Store<AppState>) => {
  appStore.replaceReducer(
    createNewRootReducer({
      parent: parentReducer,
      child: childReducer
    })
  );

  return appStore;
}
