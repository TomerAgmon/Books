import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';

export const searchBooks = createAction(
  '[Search] Search Books',
  props<{ query: string; startIndex: number }>()
);

export const searchBooksSuccess = createAction(
  '[Search] Search Books Success',
  props<{ books: Book[]; totalItems: number; query: string }>()
);

export const searchBooksFailure = createAction(
  '[Search] Search Books Failure',
  props<{ error: any }>()
);

export const toggleSearchLoading = createAction(
  '[Search] Toggle search loading',
  props<{ isLoading: boolean }>()
);
