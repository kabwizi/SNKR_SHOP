import { NgModule } from '@angular/core';
import { CenterBigImageComponent } from './center-big-image/center-big-image.component';
import { GridImageComponent } from './grid-image/grid-image.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { HomeProductCardComponent } from './home-product-card/home-product-card.component';
import { HomeComponent } from './home.component';
import { IntroImageComponent } from './intro-image/intro-image.component';
import { ProductListHorizontalSliderComponent } from './product-list-horizontal-slider/product-list-horizontal-slider.component';
import { TwoImageRowComponent } from './two-image-row/two-image-row.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    IntroImageComponent,
    GridImageComponent,
    HomeButtonComponent,
    CenterBigImageComponent,
    TwoImageRowComponent,
    HomeProductCardComponent,
    ProductListHorizontalSliderComponent,
  ],
  imports: [SharedModule],
})
export class HomeModule {}
