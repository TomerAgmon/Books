import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      // Use exhaustMap to not make additional "requests" after the first one
      exhaustMap((action) =>
        this.authService.authenticate(action.username, action.password).pipe(
          map((data) =>
            AuthActions.loginSuccess({ username: action.username })
          ),
          catchError((error) => of(AuthActions.loginFailiure({ error })))
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action) => {
          this.router.navigate(['']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
