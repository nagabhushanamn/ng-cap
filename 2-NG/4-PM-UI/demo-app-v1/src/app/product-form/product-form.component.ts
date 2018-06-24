import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  isEditing: boolean = false;
  originalProduct: any;

  constructor(private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      description: ['']
    });

    this.route.data.subscribe(data => {
      this.originalProduct = data.product;
      this.productForm.patchValue(data.product)
      this.isEditing = true;
    })

  }

  save(event) {
    event.preventDefault();
    let formData = this.productForm.value;
    if (!this.isEditing) {
      this.productsService.save(formData)
        .subscribe(resp => {
          this.router.navigate(['products'])
        })
    } else {
      let p = Object.assign({}, this.originalProduct, formData);
      this.productsService.update(p)
        .subscribe(resp => {
          this.router.navigate(['products'])
        })
    }
  }

}
