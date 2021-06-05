import { createAction, props } from '@ngrx/store';
import { IUser } from '../reducers/login.reducer';

export const showOrHideLoginPopUpAction = createAction(
  '[nav] show or hide login popup',
  props<{ value: boolean }>()
);

export const updateUserInformationAction = createAction(
  '[login pop up] update user information',
  props<IUser>()
);
