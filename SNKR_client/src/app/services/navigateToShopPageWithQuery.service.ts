import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigateToShopWithQueryService {
  constructor(private router: Router) {}
  goToShopPageWithQuery(brand: string = 'all', typeOfShoes: string = 'all') {
    this.router.navigate(['shop'], {
      queryParams: { brand: brand, typeOfShoes: typeOfShoes },
    });
  }
}
