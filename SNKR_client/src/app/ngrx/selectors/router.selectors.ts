import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/custom-route-serializer';

const routerFeatureSelector =
  createFeatureSelector<{
    navigation: number;
    state: RouterStateUrl;
  }>('router');

export const routerSelector = createSelector(
  routerFeatureSelector,
  (state) => state
);
