import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddTaxtPipe } from './pipes/add-taxe.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { priceFilterPipe } from './pipes/price-filter.pipe';
import { ProductArrayTotalPipe } from './pipes/product-array-total.pipe';
import { ShufflePipe } from './pipes/shuffle.pipe';
import { SizeFilterPipe } from './pipes/size-filter.pipe';
import { TaxePipe } from './pipes/taxe.pipe';
import { DiscountBannerComponent } from './shared-component/discount-banner/discount-banner.component';
import { ProductCardComponent } from './shared-component/product-card/product-card.component';
import { EmptyProductComponent } from './shared-component/empty-product/empty-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChangeProductImageOnHoverDirective } from './directives/change-product-image-on-hover.directive';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [
    DiscountBannerComponent,
    ProductCardComponent,
    ProductArrayTotalPipe,
    TaxePipe,
    AddTaxtPipe,
    ShufflePipe,
    priceFilterPipe,
    ColorFilterPipe,
    SizeFilterPipe,
    EmptyProductComponent,
    ChangeProductImageOnHoverDirective,
  ],
  exports: [
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    DiscountBannerComponent,
    ProductCardComponent,
    ProductArrayTotalPipe,
    TaxePipe,
    AddTaxtPipe,
    ShufflePipe,
    priceFilterPipe,
    ColorFilterPipe,
    SizeFilterPipe,
    EmptyProductComponent,
    ChangeProductImageOnHoverDirective,
  ],
})
export class SharedModule {}
