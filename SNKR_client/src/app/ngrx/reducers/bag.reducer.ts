import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/models/product';
import {
  addToBagAction,
  showOrHideBagAction,
  removeProductAction,
  addMultipeProductToBagAction,
  updateProductSelectedSizeAction,
  addProductQuantityAction,
  reduceProductQuantityAction,
} from '../actions/bag.actions';
export interface IBagState {
  bagProducts: IProduct[];
  showBag: boolean;
}
export const initialState: IBagState = { bagProducts: [], showBag: false };

export const bagReducer = createReducer(
  initialState,
  on(addToBagAction, (state, action) => {
    return {
      ...state,
      bagProducts: addProductIfNotExistOrUpdateItFn(
        state.bagProducts,
        action.product
      ),
    };
  }),
  on(addMultipeProductToBagAction, (state, action) => {
    return {
      ...state,
      bagProducts: action.products,
    };
  }),
  on(showOrHideBagAction, (state, action) => {
    return {
      ...state,
      showBag: action.value,
    };
  }),
  on(removeProductAction, (state, action) => {
    return {
      ...state,
      bagProducts: state.bagProducts.filter(
        (product) => product._id != action.product._id
      ),
    };
  }),
  on(updateProductSelectedSizeAction, (state, action) => {
    return {
      ...state,
      bagProducts: state.bagProducts.map((product) => {
        if (product._id == action.product._id) {
          return { ...product, size: action.size };
        } else {
          return product;
        }
      }),
    };
  }),

  on(addProductQuantityAction, (state, action) => {
    return {
      ...state,
      bagProducts: state.bagProducts.map((product) => {
        if (product._id == action.product._id) {
          return {
            ...product,
            quantity:
              product.quantity < product.stock
                ? product.quantity + 1
                : product.quantity,
          };
        } else {
          return product;
        }
      }),
    };
  }),
  on(reduceProductQuantityAction, (state, action) => {
    return {
      ...state,
      bagProducts: state.bagProducts.map((product) => {
        if (product._id == action.product._id) {
          return {
            ...product,
            quantity:
              product.quantity > 1 ? product.quantity - 1 : product.quantity,
          };
        } else {
          return product;
        }
      }),
    };
  })
);

function addProductIfNotExistOrUpdateItFn(
  bagProducts: IProduct[],
  newProduct: IProduct
): IProduct[] {
  if (
    bagProducts.filter((singleProduct) => singleProduct._id == newProduct._id)
      .length > 0
  ) {
    return bagProducts.map((singleProduct) => {
      if (singleProduct._id == newProduct._id) {
        return newProduct;
      } else {
        return singleProduct;
      }
    });
  } else {
    return [...bagProducts, newProduct];
  }
}
