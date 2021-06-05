import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/product';
import { showOrHideBagAction } from 'src/app/ngrx/actions/bag.actions';

@Component({
  selector: 'app-checkout-product-card',
  templateUrl: './checkout-product-card.component.html',
})
export class CheckoutProductCardComponent {
  @Input() product: IProduct | undefined;
  constructor(private store: Store, private router: Router) {}

  showProductDetailFn() {
    this.router.navigate(['productDetails', this.product?._id]);
    this.store.dispatch(showOrHideBagAction({ value: false }));
  }
}
