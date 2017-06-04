import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { GraphActions } from './actions';
import { StoreWithGraph, graphStoreFactory } from './reducer';

import { GraphState } from './model';

@Component({
  selector: 'graph-component',
  templateUrl: './component.html',
  providers: [{
    provide: StoreWithGraph,
    useFactory: graphStoreFactory,
    deps: [Store]
  }]
})

export class GraphComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();

  data: GraphState;
  data$: Observable<GraphState>;

  isFetching: GraphState;
  isFetching$: Observable<GraphState>;

  constructor(
    private graphActions: GraphActions,
    private store: StoreWithGraph
  ) {
    this.data$ = this.store.select(state => state.graph.data);

    this.data$.takeUntil(this.destroyed$)
      .subscribe(data => { this.data = data; });

    this.isFetching$ = this.store.select(state => state.graph.isFetching);

    this.isFetching$.takeUntil(this.destroyed$)
      .subscribe(isFetching => { this.isFetching = isFetching; });
  }

  ngOnInit() {
    this.store.dispatch(this.graphActions.getPosts());
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
