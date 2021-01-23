import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';
import * as SearchActions from '../actions/search.actions';

export const searchFeatureKey = 'search';

export interface State {
  loading: boolean;
  books: Book[];
  totalItems: number;

  // Api is acting weird and changing 'totalItems' every query, so this helps persist 'totalItems
  lastQuery: string;
}

export const initialState: State = {
  loading: false,
  books: undefined,
  totalItems: 0,
  lastQuery: undefined,
};

export const reducer = createReducer(
  initialState,
  on(SearchActions.toggleSearchLoading, (state, action) => ({
    ...state,
    loading: action.isLoading,
  })),

  on(SearchActions.searchBooks, (state, action) => ({
    ...state,
  })),
  on(SearchActions.searchBooksSuccess, (state, action) => ({
    ...state,
    books: action.books,
    lastQuery: action.query,
    totalItems:
      action.query !== state.lastQuery ? action.totalItems : state.totalItems,
  }))
);
