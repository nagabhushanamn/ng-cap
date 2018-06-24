import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    ReviewFormComponent,
    ViewCartComponent,
    PriceDiscountPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
