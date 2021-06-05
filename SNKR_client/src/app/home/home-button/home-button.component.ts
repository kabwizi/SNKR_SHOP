import { Component, Input } from '@angular/core';
import { NavigateToShopWithQueryService } from 'src/app/services/navigateToShopPageWithQuery.service';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css'],
})
export class HomeButtonComponent {
  @Input() brand: string = 'all';
  @Input() typeOfShoes: string = 'all';

  constructor(
    private navigateToShopWithQuery: NavigateToShopWithQueryService
  ) {}

  goToShopPageFn() {
    this.navigateToShopWithQuery.goToShopPageWithQuery(
      this.brand,
      this.typeOfShoes
    );
  }
}
