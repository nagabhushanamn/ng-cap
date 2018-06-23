import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  @Input() cart: Array<any> = []

  constructor() { }

  ngOnInit() {

  }

}
