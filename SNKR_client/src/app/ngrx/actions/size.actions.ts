import { createAction, props } from '@ngrx/store';

export const getAllSizesFromServerSuccessAction = createAction(
  '[size effect] get initiale size from server success',
  props<{ sizes: string[] }>()
);

export const getAllSizesFromServerErrorAction = createAction(
  '[size effect] get initiale size from server error'
);
