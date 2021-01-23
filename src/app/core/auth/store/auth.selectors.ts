import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (state) => state.isLoggedIn
);

export const authLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const username = createSelector(
  selectAuthState,
  (state) => state.username
);
