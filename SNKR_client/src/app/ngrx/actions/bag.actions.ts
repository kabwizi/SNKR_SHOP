import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/models/product';

export const addToBagRequestAction = createAction(
  '[product-card, shop-details] add product request',
  props<{ product: IProduct }>()
);
export const addToBagErrorAction = createAction(
  '[bag effect] add product request error'
);
export const addToBagAction = createAction(
  '[shop, product-details] add product to bag',
  props<{ product: IProduct }>()
);
export const addMultipeProductToBagAction = createAction(
  '[bag effect] add multiple product to bag',
  props<{ products: IProduct[] }>()
);

export const removeProductAction = createAction(
  '[bag effect] remove product from bag',
  props<{ product: IProduct }>()
);
export const removeProductRequestAction = createAction(
  '[bag] remove product from bag request',
  props<{ product: IProduct }>()
);
export const removeProductErrorAction = createAction(
  '[bag effect] remove product from bag error',
  props<{ product: IProduct }>()
);

export const showOrHideBagAction = createAction(
  '[shop, product-details] show or hide bag',
  props<{ value: boolean }>()
);

export const updateProductSelectedSizeAction = createAction(
  '[product details] update product selected size',
  props<{ size: number; product: IProduct }>()
);
export const addProductQuantityAction = createAction(
  '[bag] add product selected quantity',
  props<{ product: IProduct }>()
);
export const reduceProductQuantityAction = createAction(
  '[bag] reduce product selected quantity',
  props<{ product: IProduct }>()
);
