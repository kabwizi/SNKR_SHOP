import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { showOrHideBagAction } from '../ngrx/actions/bag.actions';
import { IBagState } from '../ngrx/reducers/bag.reducer';
import { bagSelector } from '../ngrx/selectors/bag.selectors';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent implements OnInit, OnDestroy {
  public bag: IBagState | undefined;
  public subscription = new Subscription();
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.store.select(bagSelector).subscribe((data) => {
      this.bag = data;
    });
  }

  hideBagFn() {
    this.store.dispatch(showOrHideBagAction({ value: false }));
  }

  goToCheckoutAndCloseTheBagFn() {
    this.hideBagFn();
    this.router.navigate(['checkout', 'personalInformation']);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
