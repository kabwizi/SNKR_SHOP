import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({ name: 'colorFilterPipe' })
export class ColorFilterPipe implements PipeTransform {
  transform(
    products: IProduct[] | undefined | null,
    colors: string[]
  ): IProduct[] {
    if (!products) return [];
    if (colors.length < 1) return products;
    return products.filter((product) =>
      colors.some((colorsFilter) => product.colors.includes(colorsFilter))
    );
  }
}
