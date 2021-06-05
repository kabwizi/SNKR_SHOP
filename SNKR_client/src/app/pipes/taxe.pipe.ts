import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'taxePipe' })
export class TaxePipe implements PipeTransform {
  transform(value: number | undefined | null) {
    if (!value) return 0;
    return ((value * 15) / 100).toFixed(2);
  }
}
