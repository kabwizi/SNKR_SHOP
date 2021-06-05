import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[show-hide-navigation-directive]' })
export class ShowHideNavigationDirective {
  public windowTopScroll = 0;
  constructor(private element: ElementRef) {}
  @HostListener('document:scroll')
  scroll() {
    let windowScroll = window.scrollY;
    if (this.windowTopScroll < 20 || window.scrollY < 20) {
      //initial
      (this.element.nativeElement as HTMLDivElement).classList.remove(
        'navigation-container'
      );
    } else if (this.windowTopScroll > window.scrollY) {
      //scroll up
      (this.element.nativeElement as HTMLDivElement).classList.add(
        'show-nav',
        'navigation-container'
      );
      (this.element.nativeElement as HTMLDivElement).classList.remove(
        'hide-nav'
      );
    } else {
      //scroll bottom
      (this.element.nativeElement as HTMLDivElement).classList.add('hide-nav');
    }
    this.windowTopScroll = windowScroll;
  }
}
