import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';
import { BooksQueryResult } from '../../search/models/books-query-result.interface';
import { BooksQuery } from '../../search/models/books-query.interface';

export const searchBooks = createAction(
  '[Search] Search Books',
  props<BooksQuery>()
);

export const searchBooksSuccess = createAction(
  '[Search] Search Books Success',
  props<BooksQueryResult>()
);

export const searchBooksFailure = createAction(
  '[Search] Search Books Failure',
  props<{ error: any }>()
);

export const toggleSearchLoading = createAction(
  '[Search] Toggle search loading',
  props<{ isLoading: boolean }>()
);
