import { Action } from '@ngrx/store';

import { ChildActions } from './actions';

export interface ChildState {
  counter: number;
}

const initialState: ChildState = {
  counter: 0
};

export function childReducer(state: ChildState = initialState, action: Action) {
  switch (action.type) {

    case ChildActions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case ChildActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case ChildActions.RESET:
      return {
        ...state,
        counter: 0
      };

    default:
      return state;
  }
}
