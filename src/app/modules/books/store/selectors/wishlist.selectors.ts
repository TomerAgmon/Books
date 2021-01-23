import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWishlist from '../reducers/wishlist.reducer';

export const selectWishlistState = createFeatureSelector<fromWishlist.State>(
  fromWishlist.wishlistFeatureKey
);

export const wishlist = createSelector(
  selectWishlistState,
  (state) => state.wishlist
);
