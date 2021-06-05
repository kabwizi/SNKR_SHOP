import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { bagReducer } from './ngrx/reducers/bag.reducer';
import { loginReducer } from './ngrx/reducers/login.reducer';
import { colorsReducer } from './ngrx/reducers/color.reducer';
import { ColorsEffect } from './ngrx/effects/colors.effect';
import { sizeReducer } from './ngrx/reducers/size.reducer';
import { SizesEffects } from './ngrx/effects/sizes.effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './custom-route-serializer';
import { BagEffet } from './ngrx/effects/bag.effet';
import { LoginModule } from './login/login.module';
import { BagModule } from './bag/bag.module';
import { CheckoutModule } from './checkout/checkout.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { ProductDetailModule } from './product-details/product-details.module';
import { CoreModule } from './core.module';
import { NavBarModule } from './navbar/navbar.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, PageNotFoundComponent],
  imports: [
    NavBarModule,
    HomeModule,
    ProductDetailModule,
    ShopModule,
    LoginModule,
    BagModule,
    CheckoutModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      bag: bagReducer,
      login: loginReducer,
      colors: colorsReducer,
      sizes: sizeReducer,
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([SizesEffects, ColorsEffect, BagEffet]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
