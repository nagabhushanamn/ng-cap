import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'shop-IT';
  isCartOpen: boolean = false;
  cart: Array<any> = [];
  products: Array<any> = [
    {
      id: 111,
      name: 'Laptop',
      price: 198000,
      makeDate: Date.now(),
      description: 'New Mac pro',
      canBuy: true,
      image: 'images/Laptop.png'
    },
    {
      id: 222,
      name: 'Mobile',
      price: 18000,
      makeDate: Date.now(),
      description: 'New  pro',
      canBuy: true,
      image: 'images/Mobile.png'
    }
  ];

  /*
    {
      "111":{item,qty}
    }
  */

  addToCart(event) {
    let item = event.item;
    let qty = event.qty;

    // if (!this.cart[item.id]) {
    //  this.cart = Object.assign({}, this.cart, { [item.id]: { item, qty } })
    // }

    this.cart.push(item)

  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen
  }
}
