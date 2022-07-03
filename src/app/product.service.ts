import { Injectable } from '@angular/core';
import { Product } from './products/products.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  addNewProduct(product: Product) {}
}
