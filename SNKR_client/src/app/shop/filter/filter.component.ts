import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IRouterState } from 'src/app/custom-route-serializer';
import { colorsSelector } from 'src/app/ngrx/selectors/colors.selectors';
import { routerSelector } from 'src/app/ngrx/selectors/router.selectors';
import { sizesSelector } from 'src/app/ngrx/selectors/size.selectors';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @ViewChild('filterContainer') filterDivContainer: ElementRef | undefined;
  public colorsList$: Observable<string[]> | undefined;
  public selectedColors: string[] = [];
  @Output() selectedColorsEmitter = new EventEmitter();
  public sizesList$: Observable<string[]> | undefined;
  public selectedSizes: string[] = [];
  @Output() selectedSizesEmitter = new EventEmitter();
  public routerSubscription = new Subscription();
  public route: IRouterState | undefined;
  public priceRange: number = 500;
  @Output() priceRangeEmitter = new EventEmitter<string>();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.colorsList$ = this.store.select(colorsSelector);
    this.sizesList$ = this.store.select(sizesSelector);
    this.routerSubscription = this.store
      .select(routerSelector)
      .subscribe((router) => {
        this.route = router;
      });
  }

  updateBrandFn(brand: string) {
    if (this.route) {
      this.router.navigate(['shop'], {
        queryParams: {
          brand: brand,
          typeOfShoes: this.route.state.queryParams['typeOfShoes'],
        },
      });
    }
  }

  updateTypeOfShoeFn(typeOfShoes: string) {
    if (this.route) {
      this.router.navigate(['shop'], {
        queryParams: {
          brand: this.route.state.queryParams['brand'],
          typeOfShoes: typeOfShoes,
        },
      });
    }
  }

  sendPriceValueToParentFn(value: string) {
    //send to shop component
    this.priceRangeEmitter.emit(value);
  }

  toggleSelectedColorFn(color: string) {
    if (this.selectedColors.includes(color, 0)) {
      this.selectedColors = this.selectedColors.filter(
        (presentColor) => presentColor !== color
      );
    } else {
      this.selectedColors = [...this.selectedColors, color];
    }
    this.selectedColorsEmitter.emit(this.selectedColors);
  }

  toggleSelectedsizeFn(size: string) {
    if (this.selectedSizes.includes(size, 0)) {
      this.selectedSizes = this.selectedSizes.filter(
        (presentColor) => presentColor !== size
      );
    } else {
      this.selectedSizes = [...this.selectedSizes, size];
    }
    this.selectedSizesEmitter.emit(this.selectedSizes);
  }

  onScrollUpFn() {
    if (this.filterDivContainer) {
      (this.filterDivContainer.nativeElement as HTMLDivElement).scrollBy({
        behavior: 'smooth',
        left: 0,
        top: -500,
      });
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) return this.routerSubscription.unsubscribe();
  }
}
