import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { productFade } from '../animation/productFade.animation';
import { IProduct } from '../models/product';
import { routerSelector } from '../ngrx/selectors/router.selectors';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: productFade,
})
export class ShopComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchProduct') searchProduct: ElementRef | undefined;
  public searchProductSubscription: Subscription | undefined;
  public productInfiniteScrollSubscription: Subscription | undefined;
  public productSubscription: Subscription | undefined;
  public productsList: IProduct[] = [];
  public priceRange: number = 500;
  public colorsListSelected: string[] = [];
  public sizesListSelected: string[] = [];
  public productPage: number = 1;
  public productBrand: string | undefined;
  public productTypeOfShoes: string | undefined;
  public showFilterBottomSheet = false;

  constructor(private store: Store, private productService: ProductService) {}

  //=========fetch initial product by route params and queries===========
  ngOnInit(): void {
    this.productSubscription = this.store
      .select(routerSelector)
      .pipe(
        mergeMap((router) => {
          this.productBrand = router.state.queryParams['brand'];
          this.productTypeOfShoes = router.state.queryParams['typeOfShoes'];
          return this.productService.fetchAndFilterProducts(
            1,
            6,
            router.state.queryParams['brand'],
            router.state.queryParams['typeOfShoes']
          );
        })
      )
      .subscribe((products) => {
        document.querySelector('nav')?.classList.remove('hide-nav');
        this.productsList = products;
        //reset page index
        this.productPage = 2;
      });
  }

  //=========fetch product by text search===========
  ngAfterViewInit() {
    this.searchProductSubscription = fromEvent<Event>(
      this.searchProduct?.nativeElement,
      'keyup'
    )
      .pipe(
        map((searchTerm) => (searchTerm.target as HTMLInputElement).value),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap((inputText) =>
          this.productService.getProductByQuerySearch(inputText)
        )
      )
      .subscribe((productFound) => {
        this.productsList = productFound;
      });
  }

  //=========fetch additional product on scroll (infinite scroll)===========
  onScrollFn() {
    this.productInfiniteScrollSubscription = this.productService
      .fetchAndFilterProducts(
        this.productPage,
        6,
        this.productBrand!,
        this.productTypeOfShoes!
      )
      .subscribe((products) => {
        let productsFound: IProduct[] = [];
        products.forEach((product) => {
          productsFound.push(product);
        });
        this.productsList = [...this.productsList, ...productsFound];
        this.productPage = this.productPage += 1;
      });
  }

  updatePriceFn(newPrice: string) {
    this.priceRange = Number(newPrice);
  }

  updateColorsListSelectedFn(colors: string[]) {
    this.colorsListSelected = colors;
  }

  updateSizesSelectedFn(sizes: string[]) {
    this.sizesListSelected = sizes;
  }

  toggleShowFilterBottomSheetFn() {
    this.showFilterBottomSheet = !this.showFilterBottomSheet;
  }

  ngOnDestroy() {
    if (this.productSubscription) return this.productSubscription.unsubscribe();
    if (this.productInfiniteScrollSubscription)
      return this.productInfiniteScrollSubscription.unsubscribe();
    if (this.searchProductSubscription)
      return this.searchProductSubscription.unsubscribe();
  }
}
