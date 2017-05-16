import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Actions } from './actions';
import { ParentStore, storeFactory } from './reducer';

@Component({
  selector: 'parent',
  templateUrl: './component.html',
  providers: [{
    provide: ParentStore,
    useFactory: storeFactory,
    deps: [Store]
  }]
})

export class ParentComponent {
  counter: Observable<number>;

  constructor(
    private actions: Actions,
    private store: ParentStore
  ) {
    this.counter = store.select(s => s.reducer.counter);
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
