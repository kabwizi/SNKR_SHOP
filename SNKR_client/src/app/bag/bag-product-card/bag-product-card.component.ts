import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/product';
import {
  removeProductRequestAction,
  showOrHideBagAction,
} from 'src/app/ngrx/actions/bag.actions';

@Component({
  selector: 'app-bag-product-card',
  templateUrl: './bag-product-card.component.html',
})
export class BagProductCardComponent {
  @Input() product: IProduct | undefined;
  constructor(private store: Store, private router: Router) {}

  removeProductFn() {
    this.store.dispatch(removeProductRequestAction({ product: this.product! }));
  }
  showProductDetailFn() {
    this.router.navigate(['productDetails', this.product?._id]);
    this.store.dispatch(showOrHideBagAction({ value: false }));
  }
}
