import { NgModule } from '@angular/core';
import { ColorsService } from './services/colors.service';
import { DexieDbService } from './services/dexie.service';
import { NavigateToShopWithQueryService } from './services/navigateToShopPageWithQuery.service';
import { ProductService } from './services/product.service';
import { SizesService } from './services/sizes.service';
import { ToggleSmallMenuService } from './services/toggle-small-menu.service';

@NgModule({
  providers: [
    ProductService,
    ColorsService,
    SizesService,
    DexieDbService,
    NavigateToShopWithQueryService,
    ToggleSmallMenuService,
  ],
})
export class CoreModule {}
