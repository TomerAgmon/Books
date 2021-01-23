import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  isLoggedIn: boolean;
  username: string;
  loading: boolean;
}

export const initialState: State = {
  isLoggedIn: false,
  username: 'somename',
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.login, (state) => {
    return { ...state, loading: true };
  }),
  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      isLoggedIn: true,
      username: action.username,
    };
  })
);
