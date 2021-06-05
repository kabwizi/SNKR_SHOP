import { createAction, props } from '@ngrx/store';

export const updateColorsSuccesAction = createAction(
  '[color-effect] update the colors on initialisation success',
  props<{ colors: string[] }>()
);
export const updateColorsErrorAction = createAction(
  '[color-effect] error when fetching the colors on initialisation'
);
