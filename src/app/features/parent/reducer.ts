import { compose } from '@ngrx/core/compose';

import { Store, Action } from '@ngrx/store';

import { AppState, createNewRootReducer } from './../../reducers/index';

import { ParentActions } from './actions';

import { ChildActions } from './child/actions';
import{ ChildState, childReducer } from './child/reducer';

export interface ParentState {
  counter: number;
}

const initialState: ParentState = {
  counter: 0
};

export function parentReducer(state: ParentState = initialState, action: Action) {
  switch (action.type) {

    case ParentActions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case ParentActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case ParentActions.RESET:
      return {
        ...state,
        counter: 0
      };

    default:
      return state;
  }
}

export interface AppStateWithParent extends AppState {
  parent: ParentState;
  child: ChildState;
}

export class StoreWithParent extends Store<AppStateWithParent> { }

export function parentStoreFactory(appStore: Store<AppState>) {
  appStore.replaceReducer(
    createNewRootReducer({
      parent: parentReducer,
      child: childReducer
    })
  );

  return appStore;
}
