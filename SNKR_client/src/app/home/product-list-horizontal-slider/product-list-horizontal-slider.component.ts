import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-horizontal-slider',
  templateUrl: './product-list-horizontal-slider.component.html',
  styleUrls: ['./product-list-horizontal-slider.component.css'],
})
export class ProductListHorizontalSliderComponent implements OnInit {
  @Input() brand: string | undefined;
  public productsList$: Observable<IProduct[]> | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if (this.brand) {
      this.productsList$ = this.productService.getProductsByBrandName(
        1,
        10,
        this.brand
      );
    }
  }

  slideToTheRightFn(scrollDIv: HTMLElement) {
    scrollDIv.scrollBy({ behavior: 'smooth', left: 700, top: 0 });
  }

  slideToTheLeftFn(scrollDIv: HTMLElement) {
    scrollDIv.scrollBy({ behavior: 'smooth', left: -700, top: 0 });
  }
}
