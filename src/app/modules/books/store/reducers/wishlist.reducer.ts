import { wishlist } from './../selectors/wishlist.selectors';
import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';
import * as WishlistActions from '../actions/wishlist.actions';

export const wishlistFeatureKey = 'wishlist';

export interface State {
  wishlist: Book[];
}

export const initialState: State = {
  wishlist: [],
};

export const reducer = createReducer(
  initialState,

  on(WishlistActions.addToWishlistSuccess, (state, action) => {
    let wishlist = [...state.wishlist];
    wishlist.push(action.book);
    return { ...state, wishlist: wishlist };
  }),

  on(WishlistActions.removeFromWishlist, (state, action) => {
    let wishlist = [...state.wishlist];
    const indexToRemove = wishlist.findIndex((b) => b.id === action.book.id);
    wishlist.splice(indexToRemove, 1);
    return { ...state, wishlist: wishlist };
  })
);
