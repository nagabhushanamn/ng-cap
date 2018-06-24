import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title: string = 'shop-IT';
  isCartOpen: boolean = false;
  cart: Array<any> = [];
  products: any = [];

  // private productsService;
  // constructor(productsService: ProductsService) {
  //   this.productsService = productsService;
  // }

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.loadProducts()
      .subscribe((response) => {
        console.log(response);
        this.products = response;
      })
  }

  addToCart(event) {
    let item = event.item;
    let qty = event.qty;
    this.cart.push(item)

  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen
  }
}
