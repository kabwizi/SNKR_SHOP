import { createReducer, on } from '@ngrx/store';
import {
  getAllSizesFromServerErrorAction,
  getAllSizesFromServerSuccessAction,
} from '../actions/size.actions';

export interface ISizes {
  sizes: string[];
}

const initial: ISizes = {
  sizes: [],
};

export const sizeReducer = createReducer(
  initial,
  on(getAllSizesFromServerSuccessAction, (state, action) => {
    return {
      ...state,
      sizes: action.sizes,
    };
  }),
  on(getAllSizesFromServerErrorAction, (state, action) => {
    return { ...state, sizes: [] };
  })
);
