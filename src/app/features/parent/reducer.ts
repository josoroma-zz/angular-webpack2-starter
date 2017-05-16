import { Store, ActionReducer, Action } from '@ngrx/store';

import { AppState, createNewRootReducer } from './../../reducers/index';

import { Actions } from './actions';

export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {

    case Actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case Actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case Actions.RESET:
      return {
        ...state,
        counter: 0
      };

    default:
      return state;
  }
}

export interface ParentState extends AppState {
  reducer: State;
}

export class ParentStore extends Store<ParentState> { }

export function storeFactory(appStore: Store<AppState>) {
  appStore.replaceReducer(createNewRootReducer({ reducer: reducer }));
  return appStore;
}
