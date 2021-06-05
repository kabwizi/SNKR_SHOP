import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discount-banner',
  templateUrl: './discount-banner.component.html',
})
export class DiscountBannerComponent {
  @Input() discount: number | undefined;
}
