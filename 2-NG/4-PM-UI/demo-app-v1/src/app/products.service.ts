import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private http: HttpClient) { }

  loadProducts() {
    const apiUrl = "http://localhost:3000/api/products";
    return this.http.get(apiUrl)
  }
  loadProduct(id) {
    const apiUrl = `http://localhost:3000/api/products/${id}`;
    return this.http.get(apiUrl)
  }
  save(product) {
    const apiUrl = "http://localhost:3000/api/products";
    product.makeDate = Date.now();
    return this.http.post(apiUrl, product)
  }
  update(product) {
    const apiUrl = `http://localhost:3000/api/products/${product.id}`;
    product.makeDate = Date.now();
    return this.http.put(apiUrl, product)
  }
  delete(id) {
    const apiUrl = `http://localhost:3000/api/products/${id}`;
    return this.http.delete(apiUrl)
  }
}
