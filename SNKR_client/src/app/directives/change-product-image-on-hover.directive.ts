import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({ selector: '[imageIndex]' })
export class ChangeProductImageOnHoverDirective {
  @Input() imageIndex: number | undefined;
  @Output() imageIndexEmitter = new EventEmitter();
  @HostListener('mouseenter') changeCurrentProductImageFn() {
    this.imageIndexEmitter.emit(this.imageIndex!);
  }
}
