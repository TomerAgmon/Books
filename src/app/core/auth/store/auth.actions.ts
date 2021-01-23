import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ username; password }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ username }>()
);

export const loginFailiure = createAction(
  '[Auth] Login Failiure',
  props<{ error }>()
);
