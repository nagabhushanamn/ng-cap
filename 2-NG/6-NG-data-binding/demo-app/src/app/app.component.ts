import { Component, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  progress1: number = 0; // data
  progress2: number = 0; // data

  // immutable
  product: any = {
    id: 111,
    name: 'Laptop',
    price: 1000.00
  }

  next: any;
  cartStream: Subject<any> = new Subject();

  constructor(private zone: NgZone) { }

  buy() {
    this.cartStream.next('New Item')
  }

  changePrice() {
    //this.product.price =  Math.random() * 1000 // mutation
    this.product = { name: 'Laptop', price: Math.random() * 1000 }; // immutable
  }

  processWithinAngularZone() {
    this.progress1 = 0;
    this.increaseProgress1(() => console.log('Done!'));
  }


  processOutsideAngularZone() {
    this.progress2 = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress2(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }


  increaseProgress1(doneCallback: () => void) {
    this.progress1 += 1;
    console.log(`Current progress: ${this.progress1}%`);
    if (this.progress1 < 100) {
      window.setTimeout(() => {
        this.increaseProgress1(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }

  increaseProgress2(doneCallback: () => void) {
    this.progress2 += 1;
    console.log(`Current progress: ${this.progress2}%`);
    if (this.progress2 % 10 === 0) {
      this.zone.run(() => { console.log('10%') })
    }
    if (this.progress2 < 100) {
      window.setTimeout(() => {
        this.increaseProgress2(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }

}
