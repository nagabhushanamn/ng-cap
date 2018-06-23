import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nums: Array<any> = [1, 10, -1, -10, 50, -50, 100, -100]
  totalCount: number = 0;

  incrementTotalCount(event) {
    this.totalCount = this.totalCount + event.value
  }

}
