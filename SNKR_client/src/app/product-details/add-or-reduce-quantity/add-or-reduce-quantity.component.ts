import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-or-reduce-quantity',
  templateUrl: './add-or-reduce-quantity.component.html',
})
export class AddOrReduceQuantityComponent implements OnInit {
  @Input() quantity: number | undefined;
  @Output() quantityActionEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addOrReduceQuantityFn(action: 'ADD' | 'REDUCE') {
    this.quantityActionEmitter.emit(action);
  }
}
