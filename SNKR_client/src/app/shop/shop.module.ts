import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FilterComponent } from './filter/filter.component';
import { ShopComponent } from './shop.component';
import { SmallScreenFilterComponent } from './small-screen-filter/small-screen-filter.component';

@NgModule({
  declarations: [ShopComponent, FilterComponent, SmallScreenFilterComponent],
  imports: [SharedModule],
})
export class ShopModule {}
