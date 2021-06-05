import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { IProduct } from '../models/product';

@Injectable()
export class DexieDbService extends Dexie {
  products: Dexie.Table<IProduct, number>;
  constructor() {
    super('SNKRDB');

    this.version(1).stores({
      products:
        '++_id, discount, title, price, description, quantity, src, brand, sizes, colors, typeOfShoes, sex',
    });
    this.products = this.table('products');
  }

  getPastBagProductFromIndexedDb() {
    return this.products.toArray();
  }

  addProductToIndexedDb(product: IProduct) {
    return this.products.put(product);
  }

  deleteProductToIndexedDb(product: IProduct) {
    return this.products.delete(product._id);
  }
}
