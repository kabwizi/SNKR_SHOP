import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SizesService } from 'src/app/services/sizes.service';
import {
  getAllSizesFromServerErrorAction,
  getAllSizesFromServerSuccessAction,
} from '../actions/size.actions';

@Injectable()
export class SizesEffects {
  constructor(private action$: Actions, private sizesService: SizesService) {}

  private getAllSizes = createEffect(() => {
    return this.action$.pipe(
      ofType('@ngrx/effects/init'),
      mergeMap(() =>
        this.sizesService.getAllSizes().pipe(
          map((initialSizeFetchFromServer) =>
            getAllSizesFromServerSuccessAction({
              sizes: initialSizeFetchFromServer,
            })
          ),
          catchError((_) => getAllSizesFromServerErrorAction)
        )
      )
    );
  });
}
