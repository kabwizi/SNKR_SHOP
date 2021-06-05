import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({ name: 'productArrayTotalPipe' })
export class ProductArrayTotalPipe implements PipeTransform {
  transform(productsList: IProduct[] | undefined | null) {
    if (!productsList) return productsList;
    return Number(
      productsList
        .map((e) => e.price * e.quantity)
        .reduce((a, b) => {
          return a + b;
        }, 0)
        .toFixed(2)
    );
  }
}
