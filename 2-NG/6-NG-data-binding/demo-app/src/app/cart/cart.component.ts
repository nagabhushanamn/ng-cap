import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  @Input() cartStream: any;
  count: number = 0;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cd.detach();
    this.cartStream.subscribe(() => {
      console.log('cart subscribing on new-item to cart');
      this.count++;
      this.cd.markForCheck()
      this.cd.reattach();
    });
  }

}
