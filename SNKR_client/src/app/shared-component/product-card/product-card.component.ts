import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/product';
import { addToBagRequestAction } from 'src/app/ngrx/actions/bag.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: IProduct | undefined;
  public productCurrentDisplayedImageIndex: number = 0;
  constructor(public store: Store, private router: Router) {}

  updateCurrentProductFn() {
    this.router.navigate(['productDetails', this.product?._id]);
  }

  addProductToBagFn(event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(
      addToBagRequestAction({
        product: { ...this.product!, size: this.product?.availableSizes[0]! },
      })
    );
  }

  updateCurrentProductImageIndexFn(index: number) {
    this.productCurrentDisplayedImageIndex = index;
  }
}
