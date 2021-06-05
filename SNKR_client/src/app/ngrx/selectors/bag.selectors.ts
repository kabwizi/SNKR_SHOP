import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBagState } from '../reducers/bag.reducer';

const bagFeatureSelector = createFeatureSelector<IBagState>('bag');

export const bagProductsSelector = createSelector(
  bagFeatureSelector,
  (state) => {
    return state.bagProducts;
  }
);

export const bagSelector = createSelector(bagFeatureSelector, (state) => {
  return state;
});
