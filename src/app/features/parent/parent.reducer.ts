import { Store, ActionReducer, Action } from '@ngrx/store';

import { AppState, createNewRootReducer } from './../../reducers/index';

import { ParentActions } from './parent.actions';

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
}

export class StoreWithParent extends Store<AppStateWithParent> { }

export function parentStoreFactory(appStore: Store<AppState>) {
    appStore.replaceReducer(createNewRootReducer({ parent: parentReducer }));
    return appStore;
}
