import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
// @Injectable()
export class ReviewsService {

  constructor(private http: HttpClient) { }

  loadReviews(productId) {
    let apiUrl = `http://localhost:3000/api/products/${productId}/reviews`;
    return this.http.get(apiUrl)
  }
  addNewReview(productId, review) {
    let apiUrl = `http://localhost:3000/api/products/${productId}/reviews`;
    return this.http.post(apiUrl, review)
  }

}
