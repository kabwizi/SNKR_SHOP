import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  /*
you can also use the db.json (the file is already present
in the project) if you prefer, more info how to use it on this link:
https://github.com/typicode/json-server

if you choose to continue with json-server, modify this file with:
=> page to _page
=> limit to _limit
=> query to q
*/

  getProductsByBrandName(
    page: number,
    limit: number,
    brand: string
  ): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `http://localhost:3000/products?brand=${brand}&page=${page}&limit=${limit}`
    );
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  fetchAndFilterProducts(
    page: number,
    limit: number,
    brand: string,
    typeOfShoes: string
  ): Observable<IProduct[]> {
    if (brand == 'all') {
      if (typeOfShoes == 'all') {
        return this.http.get<IProduct[]>(
          `http://localhost:3000/products?page=${page}&limit=${limit}`
        );
      } else {
        return this.http.get<IProduct[]>(
          `http://localhost:3000/products?typeOfShoes=${typeOfShoes}&page=${page}&limit=${limit}`
        );
      }
    } else {
      if (typeOfShoes == 'all') {
        return this.http.get<IProduct[]>(
          `http://localhost:3000/products?brand=${brand}&page=${page}&limit=${limit}`
        );
      } else {
        return this.http.get<IProduct[]>(
          `http://localhost:3000/products?brand=${brand}&typeOfShoes=${typeOfShoes}&page=${page}&limit=${limit}`
        );
      }
    }
  }

  getProductByQuerySearch(text: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `http://localhost:3000/products?query=${text}`
    );
  }
}
