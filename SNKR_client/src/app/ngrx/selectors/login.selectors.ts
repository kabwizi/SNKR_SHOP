import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILogin } from '../reducers/login.reducer';

const loginFeatureSelector = createFeatureSelector<ILogin>('login');
export const loginUserDataSelector = createSelector(
  loginFeatureSelector,
  (state) => {
    return state.user;
  }
);

export const loginSelector = createSelector(loginFeatureSelector, (state) => {
  return state;
});
