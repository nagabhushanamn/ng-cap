import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.products
    })
  }

  delete(id, event) {
    event.preventDefault();
    this.productsService.delete(id)
      .subscribe(r => {
        this.products = this.products.filter(p => p.id !== id);
      })
  }

}
