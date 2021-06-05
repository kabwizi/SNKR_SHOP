import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({ name: 'priceFilter' })
export class priceFilterPipe implements PipeTransform {
  transform(products: IProduct[] | undefined | null, price: number) {
    if (!products) return [];
    return products.filter((product) => product.price <= price);
  }
}
