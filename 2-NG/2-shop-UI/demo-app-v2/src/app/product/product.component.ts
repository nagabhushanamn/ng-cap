import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() idx: number
  @Input() product: any;
  @Output() onBuy = new EventEmitter()

  currentTab: number = 1;
  reviews: any = [];

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit() {
  }

  changeTab(tabIndex, event) {
    this.currentTab = tabIndex
    if (tabIndex === 3) {
      this.reviewsService.loadReviews(this.product.id)
        .subscribe(reviews => {
          this.reviews = reviews;
        });
    }
  }

  addNewReview(review) {
    this.reviewsService.addNewReview(this.product.id, review)
      .subscribe(savedReview => {
        this.reviews.push(review);
      });

  }

  handleBuy() {
    this.onBuy.emit({ item: this.product, qty: 1 })
  }

}
