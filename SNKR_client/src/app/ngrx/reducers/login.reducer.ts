import { createReducer, on } from '@ngrx/store';
import {
  showOrHideLoginPopUpAction,
  updateUserInformationAction,
} from '../actions/login.actions';

export interface IUser {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
}
export interface ILogin {
  user: IUser;
  showLoginPopUp: boolean;
}

const initial: ILogin = {
  showLoginPopUp: false,
  user: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
  },
};

export const loginReducer = createReducer(
  initial,
  on(showOrHideLoginPopUpAction, (state, action) => {
    return { ...state, showLoginPopUp: action.value };
  }),
  on(updateUserInformationAction, (state, action) => {
    return {
      ...state,
      user: {
        email: action.email,
        lastName: action.lastName,
        firstName: action.firstName,
        password: action.password,
      },
    };
  })
);
