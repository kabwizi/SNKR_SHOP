import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/product';
import {
  addProductQuantityAction,
  reduceProductQuantityAction,
} from 'src/app/ngrx/actions/bag.actions';

@Component({
  selector: 'app-add-or-reduce-bag-button',
  templateUrl: './add-or-reduce-bag-button.component.html',
  styleUrls: ['./add-or-reduce-bag-button.component.css'],
})
export class AddOrReduceBagButtonComponent {
  @Input() product: IProduct | undefined;
  constructor(private store: Store) {}

  addQuantityFn() {
    this.store.dispatch(addProductQuantityAction({ product: this.product! }));
  }
  reduceQuantityFn() {
    this.store.dispatch(
      reduceProductQuantityAction({ product: this.product! })
    );
  }
}
