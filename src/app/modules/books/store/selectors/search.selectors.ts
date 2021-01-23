import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearch from '../reducers/search.reducer';

export const selectSearchState = createFeatureSelector<fromSearch.State>(
  fromSearch.searchFeatureKey
);

export const searchLoading = createSelector(
  selectSearchState,
  (state) => state.loading
);

export const books = createSelector(selectSearchState, (state) => state.books);

export const totalItems = createSelector(
  selectSearchState,
  (state) => state.totalItems
);

export const lastQuery = createSelector(
  selectSearchState,
  (state) => state.lastQuery
);
