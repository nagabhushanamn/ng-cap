import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
