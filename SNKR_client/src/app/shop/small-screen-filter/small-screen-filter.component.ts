import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-screen-filter',
  templateUrl: './small-screen-filter.component.html',
  styleUrls: ['./small-screen-filter.component.css'],
})
export class SmallScreenFilterComponent {
  @Input() showFilterBottomSheet: boolean | undefined;
  @Output() showFilterBottomSheetChange: EventEmitter<boolean> =
    new EventEmitter();

  hideFilterBottomSheetFn() {
    this.showFilterBottomSheetChange.emit(false);
  }
}
