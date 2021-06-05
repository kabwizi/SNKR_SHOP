import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { bagProductsSelector } from 'src/app/ngrx/selectors/bag.selectors';
import { IProduct } from '../models/product';
import { showOrHideBagAction } from '../ngrx/actions/bag.actions';
import { showOrHideLoginPopUpAction } from '../ngrx/actions/login.actions';
import { NavigateToShopWithQueryService } from '../services/navigateToShopPageWithQuery.service';
import { ToggleSmallMenuService } from '../services/toggle-small-menu.service';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css'],
})
export class NavBarComponent implements OnInit {
  public bag$: Observable<IProduct[]> | undefined;

  constructor(
    private store: Store,
    private navigateToShopWithQuery: NavigateToShopWithQueryService,
    public showSmallMenu: ToggleSmallMenuService
  ) {}
  ngOnInit() {
    this.bag$ = this.store.select(bagProductsSelector);
  }
  showBagFn() {
    this.store.dispatch(showOrHideBagAction({ value: true }));
  }
  showLoginPopUpFn() {
    this.store.dispatch(showOrHideLoginPopUpAction({ value: true }));
  }
  toggleShowOrHideSmallMenuFn() {
    this.showSmallMenu.toggleShowOrHideSmallMenuFn();
  }
  goToShopPageFn(brand: string = 'all', typeOfShoes: string = 'all') {
    this.navigateToShopWithQuery.goToShopPageWithQuery(brand, typeOfShoes);
  }
}
