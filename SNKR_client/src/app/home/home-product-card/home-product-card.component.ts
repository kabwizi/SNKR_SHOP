import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.css'],
})
export class HomeProductCardComponent {
  @Input() product: IProduct | undefined;
  public productCurrentDisplayedImageIndex: number = 0;
  constructor(public store: Store, private router: Router) {}

  showProductDetailsFn() {
    this.router.navigate(['productDetails', this.product?._id]);
  }

  updateCurrentProductImageIndexFn(index: number) {
    this.productCurrentDisplayedImageIndex = index;
  }
}
