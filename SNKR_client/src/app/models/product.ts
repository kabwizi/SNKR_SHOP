import { allBrand, allSex, typeOfShoes } from './shared';

export interface IProduct {
  discount: number | undefined;
  _id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  src: string[];
  brand: allBrand;
  availableSizes: number[];
  size: number;
  colors: string[];
  typeOfShoes: typeOfShoes[];
  sex: allSex;
  stock: number;
}
