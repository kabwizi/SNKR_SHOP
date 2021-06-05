import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NavigateToShopWithQueryService } from 'src/app/services/navigateToShopPageWithQuery.service';

@Component({
  selector: 'app-shop-mega-menu',
  templateUrl: './shop-mega-menu.component.html',
  styleUrls: ['./shop-mega-menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShopMegaMenuComponent {
  @Output() showOrHideSmallMenuChange: EventEmitter<boolean> =
    new EventEmitter();

  constructor(
    private navigateToShopWithQuery: NavigateToShopWithQueryService
  ) {}

  goToShopPageFn(brand: string = 'all', typeOfShoes: string = 'all') {
    this.navigateToShopWithQuery.goToShopPageWithQuery(brand, typeOfShoes);
    this.showOrHideSmallMenuChange.emit(false);
  }
}
