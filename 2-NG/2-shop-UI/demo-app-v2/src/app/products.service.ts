import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
// @Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  loadProducts() {
    const apiUrl = "http://localhost:3000/api/products";
    return this.http.get(apiUrl)
  }

}
