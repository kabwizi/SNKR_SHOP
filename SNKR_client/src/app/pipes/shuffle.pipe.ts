import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({ name: 'shufflePipe' })
export class ShufflePipe implements PipeTransform {
  transform(productList: IProduct[] | null) {
    if (!productList) return productList;
    return productList.slice().sort(() => Math.random() - 0.5);
  }
}
