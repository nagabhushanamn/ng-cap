import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  reviews: Array<any> = [
    { stars: 5, author: 'who@eemail.com', body: 'same review -1' },
    { stars: 3, author: 'who@eemail.com', body: 'same review -2' }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeTab(tabIndex, event) {
    this.currentTab = tabIndex
  }

  addNewReview(review) {
    this.reviews.push(review);
  }
  handleBuy() {
    this.onBuy.emit({ item: this.product, qty: 1 })
  }

}
