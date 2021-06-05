import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addTaxePipe' })
export class AddTaxtPipe implements PipeTransform {
  transform(value: number | undefined | null) {
    if (!value) return 0;
    return (value + (value * 15) / 100).toFixed(2);
  }
}
