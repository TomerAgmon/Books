import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';

export const addToWishlist = createAction(
  '[Wishlist] Add to wishlist',
  props<{ book: Book }>()
);

export const addToWishlistSuccess = createAction(
  '[Wishlist] Add to wishlist Success',
  props<{ book: Book }>()
);

export const addToWishlistFailiure = createAction(
  '[Wishlist] Add to wishlist Failiure',
  props<{ book: Book }>()
);

export const removeFromWishlist = createAction(
  '[Wishlist] Remove from wishlist',
  props<{ book: Book }>()
);
