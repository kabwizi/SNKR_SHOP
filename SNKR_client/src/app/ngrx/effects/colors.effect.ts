import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ColorsService } from 'src/app/services/colors.service';
import {
  updateColorsErrorAction,
  updateColorsSuccesAction,
} from '../actions/color.actions';

@Injectable()
export class ColorsEffect {
  constructor(private action$: Actions, private colorsService: ColorsService) {}

  private colorEffect = createEffect(() => {
    return this.action$.pipe(
      ofType('@ngrx/effects/init'),
      mergeMap(() =>
        this.colorsService.getAllColors().pipe(
          map((initialColorsFromServer) =>
            updateColorsSuccesAction({ colors: initialColorsFromServer })
          ),
          catchError((_) => updateColorsErrorAction)
        )
      )
    );
  });
}
