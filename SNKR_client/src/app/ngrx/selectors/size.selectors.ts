import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISizes } from '../reducers/size.reducer';

const sizesFeatureSelector = createFeatureSelector<ISizes>('sizes');
export const sizesSelector = createSelector(
  sizesFeatureSelector,
  (state) => state.sizes
);
