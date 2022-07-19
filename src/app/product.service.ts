import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product, ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getProducts(products: string[]): Observable<Product[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.appendAll({ products: products.toString() });
    return this.http.get<Product[]>(this.baseURL + 'products?' + queryParams);
  }

  addNewProduct(product: Product) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(product);
    console.log(body);
    return this.http.post(this.baseURL + 'products', body, {
      headers: headers,
    });
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseURL + 'products/' + id);
  }
}
