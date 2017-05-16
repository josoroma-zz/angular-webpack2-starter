/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Action } from '@ngrx/store';

@Injectable()

export class Actions {

  static DECREMENT = '[] Decrement';
  decrement(): Action {
    return {
      type: Actions.DECREMENT
    };
  }

  static INCREMENT = '[] Increment';
  increment(): Action {
    return {
      type: Actions.INCREMENT
    };
  }

  static RESET = '[] Reset';
  reset(): Action {
    return {
      type: Actions.RESET
    };
  }
}
