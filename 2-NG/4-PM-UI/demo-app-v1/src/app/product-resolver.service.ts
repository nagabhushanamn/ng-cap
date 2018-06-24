import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.params['productId']
    console.log(id);
    return this.productsService.loadProduct(id);
  }

}
