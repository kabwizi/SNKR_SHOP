import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { IProduct } from '../models/product';
import { addToBagRequestAction } from '../ngrx/actions/bag.actions';
import { bagProductsSelector } from '../ngrx/selectors/bag.selectors';
import { routerSelector } from '../ngrx/selectors/router.selectors';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public currentProductDetails: IProduct | undefined;
  public currentProductDisplayImageIndex = 0;
  public productQuantity: number = 1;
  public productSizes: number | undefined;
  public sizeIsSelected: boolean = false;
  public productSubscription: Subscription = new Subscription();
  public otherProduct$: Observable<IProduct[]> | undefined;
  public productIsOnStore: boolean = false;
  constructor(public store: Store, private productService: ProductService) {}

  ngOnInit(): void {
    this.productSubscription = this.store
      .select(routerSelector)
      .pipe(
        switchMap((storeRouter) =>
          this.store.select(bagProductsSelector).pipe(
            map((bagProducts) => {
              //if the product is already in the bag, take it
              if (
                bagProducts.filter(
                  (singleBagProduct) =>
                    singleBagProduct._id == storeRouter.state.params['id']
                ).length > 0
              ) {
                this.productIsOnStore = true;
                return of(
                  bagProducts.filter(
                    (singleBagProduct) =>
                      singleBagProduct._id == storeRouter.state.params['id']
                  )[0]
                );
              } else {
                //otherwise take the product from the database
                this.productIsOnStore = false;
                return this.productService.getProductById(
                  storeRouter.state.params['id']
                );
              }
            })
          )
        )
      )
      .pipe(mergeMap((p) => p))
      .subscribe((product) => {
        document.querySelector('nav')?.classList.remove('hide-nav');
        this.getSimularProduct(product, this.currentProductDetails);
        this.currentProductDetails = product;
        this.productQuantity = product.quantity;
        this.productSizes = product.size;
        if (this.productSizes) {
          this.sizeIsSelected = false;
        }
      });
  }

  addProductToBagFn() {
    /*add product to cart only if the user has
      chosen a size otherwise display a red error
      border on the grid of available sizes of the product
      */
    if (this.productSizes) {
      this.sizeIsSelected = false;
      this.store.dispatch(
        addToBagRequestAction({
          product: {
            ...this.currentProductDetails!,
            quantity: this.productQuantity,
            size: this.productSizes!,
          },
        })
      );
    } else {
      this.sizeIsSelected = true;
    }
  }

  //add and deduct the quantity according to the availability in stock
  addOrReduceQuantityFn(action: string) {
    if (this.currentProductDetails) {
      if (action == 'ADD') {
        if (this.productQuantity < this.currentProductDetails.stock) {
          this.productQuantity = this.productQuantity += 1;
        }
      } else {
        if (this.productQuantity > 1) {
          this.productQuantity = this.productQuantity -= 1;
        }
      }
    }
  }

  //display other products of the same brand
  getSimularProduct(newProduct: IProduct, oldProduct: IProduct | undefined) {
    if (!oldProduct || newProduct.brand !== oldProduct.brand)
      this.otherProduct$ = this.productService.getProductsByBrandName(
        1,
        4,
        newProduct.brand
      );
  }

  updateSelecteSizeFn(size: number) {
    if (this.currentProductDetails) {
      this.productSizes = size;
      this.sizeIsSelected = false;
    }
  }

  updateCurrentProductDisplayImageIndexFn(newSrcIndex: number) {
    this.currentProductDisplayImageIndex = newSrcIndex;
  }

  ngOnDestroy() {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }
}
