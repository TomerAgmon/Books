import { BooksService } from './../../../../core/services/books.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  tap,
  finalize,
} from 'rxjs/operators';
import { of } from 'rxjs';

import * as SearchActions from '../actions/search.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class SearchEffects {
  SEARCH_DEBOUNCE = 500;

  searchBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.searchBooks),
      debounceTime(this.SEARCH_DEBOUNCE),
      distinctUntilChanged(
        (a, b) => a.query === b.query && a.startIndex === b.startIndex
      ),
      tap(() =>
        this.store.dispatch(
          SearchActions.toggleSearchLoading({ isLoading: true })
        )
      ),
      switchMap((action) => {
        // No empty queries allowed by the api, reset the state
        if (action.query.length === 0) {
          return of(
            SearchActions.searchBooksSuccess({
              books: undefined,
              totalItems: 0,
              query: action.query,
            })
          );
        }

        return this.booksService.search(action.query, action.startIndex).pipe(
          map((result) => SearchActions.searchBooksSuccess(result)),
          catchError((error) => of(SearchActions.searchBooksFailure({ error })))
        );
      }),
      tap(() =>
        this.store.dispatch(
          SearchActions.toggleSearchLoading({ isLoading: false })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store
  ) {}
}
