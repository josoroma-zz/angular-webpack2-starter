import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ParentActions } from './parent.actions';
import { StoreWithParent, parentStoreFactory } from './parent.reducer';

@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  providers: [{ provide: StoreWithParent, useFactory: parentStoreFactory, deps: [Store] }]
})

export class ParentComponent {
  counter: Observable<number>;

  constructor(
    private parentActions: ParentActions,
    private store: StoreWithParent
  ) {
    this.counter = store.select(s => s.parent.counter);
  }

  decrement() {
    this.store.dispatch(this.parentActions.decrement());
  }

  increment() {
    this.store.dispatch(this.parentActions.increment());
  }

  reset() {
    this.store.dispatch(this.parentActions.reset());
  }
}
