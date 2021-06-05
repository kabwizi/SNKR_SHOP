import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AddOrReduceQuantityComponent } from './add-or-reduce-quantity/add-or-reduce-quantity.component';
import { ProductDetailsComponent } from './product-details.component';
@NgModule({
  declarations: [ProductDetailsComponent, AddOrReduceQuantityComponent],
  imports: [SharedModule],
})
export class ProductDetailModule {}
