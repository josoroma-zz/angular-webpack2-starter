import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ParentActions } from './actions';
import { StoreWithParent, parentStoreFactory } from './reducer';

@Component({
  selector: 'parent-component',
  templateUrl: './component.html',
  providers: [{
    provide: StoreWithParent,
    useFactory: parentStoreFactory,
    deps: [Store]
  }]
})

export class ParentComponent {
  counter: Observable<number>;

  constructor(
    private actions: ParentActions,
    private store: StoreWithParent
  ) {
    console.log('ParentComponent - store ===>', store);

    this.counter = store.select(state => {
      console.log('ParentComponent this.store.select - state ===>', state);
      return state.parent.counter
    });
  }

  decrement() {
    this.store.dispatch(this.actions.decrement());
  }

  increment() {
    this.store.dispatch(this.actions.increment());
  }

  reset() {
    this.store.dispatch(this.actions.reset());
  }
}
