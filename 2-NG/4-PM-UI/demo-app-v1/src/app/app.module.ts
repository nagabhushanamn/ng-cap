import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsResolverService } from './products-resolver.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductResolverService } from './product-resolver.service';

let routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
        resolve: {
          products: ProductsResolverService
        },
        children: [
          {
            path: 'edit/:productId',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolverService
            }
          }
        ]
      }

    ]

  },
  {
    path: 'products/new',
    component: ProductFormComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
