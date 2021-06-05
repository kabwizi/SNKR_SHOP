import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({ name: 'sizeFilterPipe' })
export class SizeFilterPipe implements PipeTransform {
  transform(products: IProduct[] | undefined | null, sizes: string[]) {
    if (!products || sizes.length < 1) return products;
    return products.filter((product) =>
      sizes.some((presentColor) =>
        product.availableSizes.includes(Number(presentColor))
      )
    );
  }
}
