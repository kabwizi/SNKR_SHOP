import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProduct } from '../models/product';
import { bagProductsSelector } from '../ngrx/selectors/bag.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public bagProduct: IProduct[] | undefined;
  public bagSubscription: Subscription | undefined;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bagSubscription = this.store
      .select(bagProductsSelector)
      .subscribe((productList) => {
        this.bagProduct = productList;
      });
  }
  ngOnDestroy() {
    if (this.bagSubscription) return this.bagSubscription.unsubscribe();
  }
}
