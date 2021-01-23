import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  concatMap,
  tap,
  withLatestFrom,
  switchMap,
} from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as WishlistActions from '../actions/wishlist.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { wishlist } from '../selectors/wishlist.selectors';

@Injectable()
export class WishlistEffects {
  addToWishlist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WishlistActions.addToWishlist),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(wishlist)),
          map(([action, wishlist]) => {
            const alreadyInWishlist = wishlist?.find(
              (b) => b.id === action.book.id
            );
            return alreadyInWishlist
              ? WishlistActions.addToWishlistFailiure({ book: action.book })
              : WishlistActions.addToWishlistSuccess({ book: action.book });
          })
        )
      )
    );
  });

  addToWishlistSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(WishlistActions.addToWishlistSuccess),
        tap((action) =>
          this.snackbar.open(action.book.title + ' added to the wishlist')
        )
      );
    },
    { dispatch: false }
  );

  addToWishlistFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(WishlistActions.addToWishlistFailiure),
        tap((action) => {
          return this.snackbar.open(
            action.book.title + ' is already in the wishlist'
          );
        })
      );
    },
    { dispatch: false }
  );

  removeFromWishlist$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(WishlistActions.removeFromWishlist),
        tap((action) =>
          this.snackbar.open(action.book.title + ' removed from the wishlist')
        )
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private snackbar: MatSnackBar,
    private store: Store
  ) {}
}
