import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { CheckoutProductCardComponent } from './checkout-product-card/checkout-product-card.component';
import { CheckoutComponent } from './checkout.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    OrderDetailsComponent,
    PersonalInformationComponent,
    PaymentInformationComponent,
    CheckoutProductCardComponent,
  ],
  imports: [SharedModule],
})
export class CheckoutModule {}
