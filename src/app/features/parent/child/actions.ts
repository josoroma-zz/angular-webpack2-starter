/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Action } from '@ngrx/store';

@Injectable()

export class ChildActions {

  static DECREMENT = '[Child] Decrement';
  decrement(): Action {
    return {
      type: ChildActions.DECREMENT
    };
  }

  static INCREMENT = '[Child] Increment';
  increment(): Action {
    return {
      type: ChildActions.INCREMENT
    };
  }

  static RESET = '[Child] Reset';
  reset(): Action {
    return {
      type: ChildActions.RESET
    };
  }
}
