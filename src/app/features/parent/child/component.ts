import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ParentActions } from '../actions';

import { ChildActions } from './actions';

import { StoreWithParent, parentStoreFactory } from '../reducer';

@Component({
  selector: 'child-component',
  templateUrl: './component.html',
  providers: [{
    provide: StoreWithParent,
    useFactory: parentStoreFactory,
    deps: [Store]
  }]
})

export class ChildComponent {
  counter: Observable<number>;

  constructor(
    private parentActions: ParentActions,
    private childActions: ChildActions,
    private store: StoreWithParent
  ) {
    console.log('ChildComponent - store ===>', store);

    this.counter = store.select(state => {
      console.log('ChildComponent this.store.select - state ===>', state);
      return state.child.counter
    });
  }

  decrement() {
    this.store.dispatch(this.childActions.decrement());
  }

  increment() {
    this.store.dispatch(this.childActions.increment());
  }

  reset() {
    this.store.dispatch(this.childActions.reset());
  }
}
