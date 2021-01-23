import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

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
            const wishlistAction = alreadyInWishlist
              ? WishlistActions.addToWishlistFailiure
              : WishlistActions.addToWishlistSuccess;

            return wishlistAction({ book: action.book });
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
          this.snackbar.open(`${action.book.title} added to the wishlist`)
        )
      );
    },
    { dispatch: false }
  );

  addToWishlistFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(WishlistActions.addToWishlistFailiure),
        tap((action) =>
          this.snackbar.open(`${action.book.title} is already in the wishlist`)
        )
      );
    },
    { dispatch: false }
  );

  removeFromWishlist$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(WishlistActions.removeFromWishlist),
        tap((action) =>
          this.snackbar.open(`${action.book.title} rmoved from the wishlist`)
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
