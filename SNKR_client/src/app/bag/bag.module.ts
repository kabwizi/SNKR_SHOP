import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AddOrReduceBagButtonComponent } from './bag-product-card/add-or-reduce-bag-button/add-or-reduce-bag-button.component';
import { BagProductCardComponent } from './bag-product-card/bag-product-card.component';
import { BagComponent } from './bag.component';

@NgModule({
  declarations: [
    BagComponent,
    BagProductCardComponent,
    AddOrReduceBagButtonComponent,
  ],
  imports: [SharedModule],
  exports: [BagComponent],
})
export class BagModule {}
