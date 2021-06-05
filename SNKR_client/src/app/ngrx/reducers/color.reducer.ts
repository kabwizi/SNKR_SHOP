import { createReducer, on } from '@ngrx/store';
import {
  updateColorsErrorAction,
  updateColorsSuccesAction,
} from '../actions/color.actions';

export interface IColors {
  colors: string[];
}
const initialColors: IColors = { colors: [] };
export const colorsReducer = createReducer(
  initialColors,
  on(updateColorsSuccesAction, (state, action) => {
    return {
      ...state,
      colors: action.colors,
    };
  }),
  on(updateColorsErrorAction, (state, action) => {
    return {
      ...state,
      colors: [],
    };
  })
);
