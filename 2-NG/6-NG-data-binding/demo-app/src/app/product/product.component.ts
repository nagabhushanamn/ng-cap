import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // changeDetection:ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush // if components is based on immutable input properties
})
export class ProductComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
