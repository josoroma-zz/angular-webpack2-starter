/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Action } from '@ngrx/store';

@Injectable()

export class ParentActions {

  static DECREMENT = '[Parent] Decrement';
  decrement(): Action {
    return {
      type: ParentActions.DECREMENT
    };
  }

  static INCREMENT = '[Parent] Increment';
  increment(): Action {
    return {
      type: ParentActions.INCREMENT
    };
  }

  static RESET = '[Parent] Reset';
  reset(): Action {
    return {
      type: ParentActions.RESET
    };
  }
}
