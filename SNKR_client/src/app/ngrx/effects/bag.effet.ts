import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DexieDbService } from 'src/app/services/dexie.service';
import {
  addToBagRequestAction,
  addToBagAction,
  addToBagErrorAction,
  removeProductRequestAction,
  removeProductAction,
  removeProductErrorAction,
  addMultipeProductToBagAction,
} from 'src/app/ngrx/actions/bag.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class BagEffet {
  constructor(private action$: Actions, private dexieService: DexieDbService) {}

  //take products from indexDB at initialization if there is any
  private getPastBagProductToIndexedDB = createEffect(() => {
    return this.action$.pipe(
      ofType('@ngrx/effects/init'),
      mergeMap(() => {
        return this.dexieService.getPastBagProductFromIndexedDb();
      }),
      map((products) => {
        return addMultipeProductToBagAction({ products: products });
      }),
      catchError((_) => addToBagErrorAction)
    );
  });

  /*
  register the product in indexeddb each time 
  the customer you add one
  */
  private addProductToBag = createEffect(() => {
    return this.action$.pipe(
      ofType(addToBagRequestAction),
      tap((product) =>
        this.dexieService.addProductToIndexedDb(product.product)
      ),
      map((product) => addToBagAction(product)),
      catchError((_) => addToBagErrorAction)
    );
  });

  /*
  remove the product in indexeddb each time 
  the customer you remove one
  */
  private removeProductToBag = createEffect(() => {
    return this.action$.pipe(
      ofType(removeProductRequestAction),
      tap((product) =>
        this.dexieService.deleteProductToIndexedDb(product.product)
      ),
      map((product) => removeProductAction(product)),
      catchError((_) => removeProductErrorAction)
    );
  });
}
