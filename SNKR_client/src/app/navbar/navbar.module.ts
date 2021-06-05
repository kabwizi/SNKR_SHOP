import { NgModule } from '@angular/core';
import { ShowHideNavigationDirective } from '../directives/show-hide-navigation.directive';
import { SharedModule } from '../shared.module';
import { NavBarComponent } from './navBar.component';
import { ShopMegaMenuComponent } from './shop-menu-item/shop-mega-menu.component';
import { SmallScreenMenuComponent } from './small-screen-menu/small-screen-menu.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SmallScreenMenuComponent,
    ShopMegaMenuComponent,
    ShowHideNavigationDirective,
  ],
  exports: [NavBarComponent, SmallScreenMenuComponent],
  imports: [SharedModule],
})
export class NavBarModule {}
