import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { bagProductsSelector } from 'src/app/ngrx/selectors/bag.selectors';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
})
export class OrderDetailsComponent implements OnInit {
  public bagProduct$: Observable<IProduct[]> | undefined;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bagProduct$ = this.store.select(bagProductsSelector);
  }
}
