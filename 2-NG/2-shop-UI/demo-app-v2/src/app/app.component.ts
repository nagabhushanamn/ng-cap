import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'shop-IT';
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
}
