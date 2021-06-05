import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IColors } from '../reducers/color.reducer';

const colorsFeatureSelector = createFeatureSelector<IColors>('colors');
export const colorsSelector = createSelector(
  colorsFeatureSelector,
  (state) => state.colors
);
