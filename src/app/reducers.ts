/**
 * Created by jmittler on 12/30/16.
 */
// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
import {Borough} from './borough';

export const RECEIVE_BOROUGHS = 'RECEIVE_BOROUGHS';

export interface AppState {
  boroughs: Borough[];
}
export function reducer(state: AppState = {boroughs: []}, action: Action) {
  switch (action.type) {


    case RECEIVE_BOROUGHS:
      return {
        boroughs: action.payload.boroughs
      };

    default:
      return state;
  }
}


export const counterReducer: ActionReducer<AppState> = reducer;
