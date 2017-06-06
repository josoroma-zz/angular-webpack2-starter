import { Action } from '@ngrx/store';

import { ChildActions } from './actions';

import { reducerDecrement } from './reducer.decrement';
import { reducerIncrement } from './reducer.increment';
import { reducerReset } from './reducer.reset';

export interface ChildState {
  counter: number;
}

const initialState: ChildState = {
  counter: 0
};

export const childReducer = (state: ChildState = initialState, action: Action) => {
  let actions = {
    [ChildActions.DECREMENT]: reducerDecrement(state),
    [ChildActions.INCREMENT]: reducerIncrement(state),
    [ChildActions.RESET]: reducerReset(state)
  };

  return actions[action.type] || state;
};
