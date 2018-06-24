import { Component, ViewChild } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-root',
  //template:``,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message: string = "greetings";

  @ViewChild(GreetingComponent) child

  changeMessage(message) {
    this.message = message
    this.child.childMethod()
  }
}
